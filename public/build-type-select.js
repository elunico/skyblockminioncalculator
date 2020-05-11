// requires MINIONS, NPC_SELL_PRICES, SC_KIND, DROPID_TO_NAME
// before including this file be sure to include its dependencies
// minion_level_stats.js, minion_types.js, npc_prices.js, dropid_to_name.js
// sc3000_map.js

let select = document.getElementById('type-select');

for (let name of Object.keys(MINIONS)) {
    let option = document.createElement('option');
    option.value = name;
    option.innerHTML = name;
    select.appendChild(option);
}

let BAZAAR_PRICES = {};

function getHourlyItemDrops(minionSlot) {
    return getItemDrops(minionSlot, 60 * 60);
}

function getItemDrops(minionSlot, seconds) {
    let actionInterval = MINION_LEVEL_STATS[minionSlot.name][minionSlot.level].cooldown;
    let speed = calculateNewSpeed(actionInterval, minionSlot.fuel, minionSlot.upgrade1, minionSlot.upgrade2, minionSlot.additionalBonusPercentage);
    let count = seconds / speed;
    // gets 1 drop every 2 actions 
    count = count / 2;
    let drops = {};
    let dropsPerAction = MINIONS[minionSlot.name].count;
    // gets 1 drop every 2 actions, but thing that drops may drop many (i.e snow)
    count *= dropsPerAction;
    for (let opt of MINIONS[minionSlot.name].drops) {
        drops[opt.id] = Math.floor(count * opt.chance);
    }

    // diamond spreading gives 1 diamond per 10 harvested items
    // need to divide out drops per harvest 
    // then divide by every 10 harvests
    // counts is already halved to account for every OTHER action being used to spawn not harvest
    if (minionSlot.upgrade1 == 'diamondspreading' || minionSlot.upgrade2 == 'diamondspreading') {
        if (drops['DIAMOND']) {
            drops['DIAMOND'] += Math.floor((count / dropsPerAction) / 10);
        } else {
            drops['DIAMOND'] = Math.floor((count / dropsPerAction) / 10);
        }
    }

    if (minionSlot.upgrade1 == 'flintshovel' || minionSlot.upgrade2 == 'flintshovel') {
        if (minionSlot.name != 'Gravel') {
            showStatus(`Flint Shovel cannot be put into minion of type ${minionSlot.name}. It will be ignored`);
        } else {
            drops['FLINT'] += drops["GRAVEL"];
            delete drops['GRAVEL'];
        }
    }

    return drops;
}

function totalPriceForDrops(totalDrops, place) {
    if (place == SELL_PREFERENCE.NPC) {
        let sum = 0
        for (let id of Object.keys(totalDrops)) {
            sum += NPC_SELL_PRICES[id] * totalDrops[id];
        }
        return sum;
    } else if (place == SELL_PREFERENCE.BAZAAR) {
        let sum = 0
        for (let id of Object.keys(totalDrops)) {
            sum += BAZAAR_PRICES[id] * totalDrops[id];
        }
        return sum;
    } else {
        let sum = 0
        for (let id of Object.keys(totalDrops)) {
            sum += (BAZAAR_PRICES[id] > NPC_SELL_PRICES[id] ? BAZAAR_PRICES[id] : NPC_SELL_PRICES[id]) * totalDrops[id];
        }
        return sum;
    }
}

function setCookie(key, value, expiresAfterMinutes) {
    document.cookie = `${key}=${value}; expires=${new Date(Date.now() + 1000 * 60 * expiresAfterMinutes).toUTCString()}`;
}

function getCookie(key) {
    let cookie = document.cookie;
    let parts = cookie.split(/;/g);
    for (let part of parts) {
        if (part.trim().startsWith(key)) {
            return part.split('=')[1];
        }
    }
    return null;
}

(async function () {

    // caching 
    if (getCookie('hypixel-fetched') == 'true') {
        console.log('Bazaar prices from cache');
        let data = localStorage.getItem('hypixel-bazaar-data');
        BAZAAR_PRICES = JSON.parse(data);
        return;
    }

    let resp = await fetch('/get-bazaar-prices');
    let json = await resp.json();
    let products = json.products;
    let objs = Object.values(products).map(v => { return { 'id': v['product_id'], 'sell_price': v['quick_status']['sellPrice'] } });
    for (let obj of objs) {
        BAZAAR_PRICES[obj.id] = obj.sell_price;
    }
    console.log("Fetched Bazaar prices. Caching prices.");
    setCookie('hypixel-fetched', 'true', 15);
    localStorage.setItem('hypixel-bazaar-data', JSON.stringify(BAZAAR_PRICES));

})();


const SELL_PREFERENCE = {
    NPC: 'npc',
    BAZAAR: 'bazaar',
    BEST_PRICE: 'bestprice'
}

/**
 * 
 * @param {*} type The minion type such as diamond, zombie, potato etc.
 * @param {*} preference The preference for where to sell items. See the SELL_PREFERENCE object for legal options
 * @param {*} options An object representing other options.
 * 
 * options = {
 *   sc3000: boolean indicating the presence of a sc3000 and therefore the ability to sell the enchanted version of everything in the minion drops
 *   enchantedegg: boolean indicating whether the chicken minion will also drop eggs 
 *   flintshovel: boolean indicating if the gravel minion has a flint shovel 
 * }
 */
function minionTypeToPrices(drops, preference, options) {

    // let drops = MINIONS[type].drops;
    let npc_prices = {};
    let bazaar_prices = {};

    for (let id of Object.keys(drops)) {
        npc_prices[id] = { place: 'npc', price: NPC_SELL_PRICES[id] };
        bazaar_prices[id] = { place: 'bazaar', price: BAZAAR_PRICES[id] };
    }

    if (options != {}) {
        showStatus("Options is not currently implemented. Things like sc3000, enchantedegg, and flintshovel will not affect the output")
    }

    switch (preference) {
        case SELL_PREFERENCE.NPC:
            return npc_prices;
        case SELL_PREFERENCE.BAZAAR:
            return fix_missing_prices(bazaar_prices);
        case SELL_PREFERENCE.BEST_PRICE: {
            let prices = {};
            for (let id of Object.keys(drops)) {
                if (npc_prices[id].price < bazaar_prices[id].price) {
                    prices[id] = bazaar_prices[id];
                } else {
                    prices[id] = npc_prices[id];
                }
            }
            return fix_missing_prices(prices);
        }
        default:
            throw 'No Preference specified'

    }

}

function fix_missing_prices(prices) {
    for (let key of Object.keys(prices)) {
        if (!prices[key].price) {
            prices[key] = { place: 'npc', price: NPC_SELL_PRICES[key] };
        }
    }
    return prices;
}