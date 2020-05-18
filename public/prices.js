// requires MINIONS, NPC_SELL_PRICES, SC_KIND, DROPID_TO_NAME
// before including this file be sure to include its dependencies
// minion_level_stats.js, minion_types.js, npc_prices.js, dropid_to_name.js
// sc3000_map.js

const SELL_PREFERENCE = {
    NPC: 'npc',
    BAZAAR: 'bazaar',
    BEST_PRICE: 'bestprice'
}


let BAZAAR_PRICES = {};

// retrieve bazaar prices locally or from server
// then show the add minion form when prices are ready 
(async function () {
    let form = document.getElementById('minion-form');
    let loading = document.getElementById('form-loading');
    let bazaarFetched = document.getElementById('bazaar-fetched');

    // local caching check
    if (getCookie('hypixel-fetched') == 'true') {
        console.log('Bazaar prices from cache');
        let data = localStorage.getItem('hypixel-bazaar-data');
        BAZAAR_PRICES = JSON.parse(data);
    } else {
        let resp = await fetch('/get-bazaar-prices');
        let json = await resp.json();
        let products = json.products;
        let objs = Object.values(products).map(v => { return { 'id': v['product_id'], 'sell_price': v['quick_status']['sellPrice'] } });
        for (let obj of objs) {
            BAZAAR_PRICES[obj.id] = obj.sell_price;
        }
        BAZAAR_PRICES.meta = { lastUpdated: json.lastUpdated };
        console.log("Fetched Bazaar prices. Caching prices.");
        setCookie('hypixel-fetched', 'true', { expires: new Date(Date.now() + (1000 * 60 * 15)).toUTCString() });
        localStorage.setItem('hypixel-bazaar-data', JSON.stringify(BAZAAR_PRICES));

    }
    let updated = new Date(BAZAAR_PRICES.meta.lastUpdated);
    bazaarFetched.textContent = updated.toLocaleString();

    loading.setAttribute('hidden', true);
    form.removeAttribute('hidden');
    for (let i = 1; i <= MAX_MINION_SLOTS; i++)
        MinionSlot.fromLocalStorage(i);
})();


function getHourlyMinionDropCounts(minionSlot) {
    return getMinionDropCounts(minionSlot, 60 * 60);
}

/**
 * Calculates the number of each type of drop the minion in the 
 * MinionSlot will drop over seconds seconds
 * @returns {object} Item IDs of the minion's drops to the amount dropped
 * @param {MinionSlot} minionSlot The minion slot whose drops we want to know
 * @param {number} seconds the interval over which to calculate number of drops
 */
function getMinionDropCounts(minionSlot, seconds) {
    let actionInterval = MINION_LEVEL_STATS[minionSlot.name][minionSlot.level].cooldown;
    let speed = calculateNewSpeed(actionInterval, minionSlot.fuel, minionSlot.upgrade1, minionSlot.upgrade2, minionSlot.additionalBonusPercentage);
    let count = seconds / speed;
    // count is # of actions. Every other action results in a yield 
    count = count / 2;
    let drops = {};
    let dropsPerAction = MINIONS[minionSlot.name].count;
    // gets 1 drop every 2 actions, but some things drop multiple items (e.g. snow)
    count *= dropsPerAction;
    for (let opt of MINIONS[minionSlot.name].drops) {
        drops[opt.id] = Math.floor(count * opt.chance);
    }

    // diamond spreading gives 1 diamond per 10 *harvested items*
    // need to divide out drops per harvest since dropping 4 snow balls counts as 1 harvest
    // then divide by every 10 *harvests* (normally 20 actions)
    // but remember we already divided by 2 to remove each time an 
    // action results in a spawn and not a harvest so we just divide by 10
    if (minionSlot.upgrade1 == 'diamondspreading' || minionSlot.upgrade2 == 'diamondspreading') {
        if (drops['DIAMOND']) {
            drops['DIAMOND'] += Math.floor((count / dropsPerAction) / 10);
        } else {
            drops['DIAMOND'] = Math.floor((count / dropsPerAction) / 10);
        }
    }

    if (minionSlot.upgrade1 == 'flintshovel' || minionSlot.upgrade2 == 'flintshovel') {
        if (minionSlot.name != 'Gravel') {
            showStatus(`Flint Shovel cannot be put into minion of type ${minionSlot.name
                }.It will be ignored`);
        } else {
            drops['FLINT'] += drops["GRAVEL"];
            delete drops['GRAVEL'];
        }
    }

    if (minionSlot.upgrade1 == 'enchantedegg' || minionSlot.upgrade2 == 'enchantedegg') {
        if (minionSlot.name != 'Chicken') {
            showStatus(`Enchanted Egg cannot be put into minion of type ${minionSlot.name
                }.It will be ignored`);
        } else {
            drops['EGG'] = drops["RAW_CHICKEN"];
        }
    }

    return drops;
}

/**
 * returns a sum of the amount earned by selling the given number (value) 
 * of each item ID (key) in dropCounts at the place preferred by the place argument 
 * 
 * @param {object} dropCounts an object listing the number of drops for each Item ID (can be obtained from getTotalMinionDropsCount)
 * @param {string} place preferred place to sell drops
 */
function getTotalDropsValue(dropCounts, place) {
    let sum = 0;
    for (let id of Object.keys(dropCounts)) {
        sum += getItemPrice(id, place).price * dropCounts[id];
    }
    return sum;
}


/**
 * Returns a object containing item IDs to their 
 * unit prices from the place according to preference.
 * 
 * Essentially, given a list of items, it iterates
 * getItemPrice on them
 * 
 * @param {*} drops A list of item ids that the minion drops 
 * @param {*} preference The preference for where to sell items. See the SELL_PREFERENCE object for legal options
 * 
 */
function getDropItemPrices(drops, preference) {
    let prices = {};
    for (let id of drops) {
        prices[id] = getItemPrice(id, preference);
    }
    return prices
}

/**
 * This function returns the price that the item with id can be 
 * sold for based on the place preference. This function is
 * recommended over indexing directly into NPC_SELL_PRICES or BAZAAR_PRICES
 * because it will 1) select the higher price between the two 
 * if SELL_PREFERENCE.BEST_PRICE is passed and 2) will fall back 
 * to selling to NPC if the Bazaar does not except the item such as with 
 * eggs. Therefore, it requires must less logic and checking to just 
 * use this function than to use the lookup tables themselves.
 * 
 * @param {string} id The id of the drop as given in minion_types.js
 * @param {string} place from SELL_PREFERENCE
 */
function getItemPrice(id, place) {
    if (place === SELL_PREFERENCE.NPC) {
        return { place: 'npc', price: NPC_SELL_PRICES[id] };
    } else if (place === SELL_PREFERENCE.BAZAAR) {
        if (BAZAAR_PRICES[id] === undefined) {
            return { place: 'npc', price: NPC_SELL_PRICES[id] }
        } else {
            return { place: 'bazaar', price: BAZAAR_PRICES[id] };
        }
    } else {
        if (BAZAAR_PRICES[id] === undefined || BAZAAR_PRICES[id] < NPC_SELL_PRICES[id]) {
            return { place: 'npc', price: NPC_SELL_PRICES[id] }
        } else {
            return { place: 'bazaar', price: BAZAAR_PRICES[id] };
        }
    }
}
