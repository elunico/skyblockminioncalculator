const STATUS_YELLOW = 'rgb(255, 191, 0)';
const STATUS_RED = 'red';

const fuelDropdown = new Dropdown('fuel');
const upgrade1Dropdown = new Dropdown('upgrade1');
const upgrade2Dropdown = new Dropdown('upgrade2');
const minionTypeDropdown = new Dropdown('type-select');
const sellToDropdown = new Dropdown('sell-place-preference');
const levelDropdown = new Dropdown('level-select');

const addButton = document.getElementById('add-minion-button');
const add24Button = document.getElementById('add-24-minion-button');
const removeAllButton = document.getElementById('remove-all-minion-button');
const colorSchemeButton = document.getElementById('color-scheme-button');
const fontButton = document.getElementById('font-button');

let isDark = matchMedia('(prefers-color-scheme: dark)').matches;
colorSchemeButton.value = isDark ? "Switch to Light Mode" : "Switch to Dark Mode";

function switchScheme() {
    const root = document.documentElement;
    if (isDark) {
        root.style.setProperty('--input-color', '#152689');
        root.style.setProperty('--background-color', '#fff');
        root.style.setProperty('--foreground-color', '#152689');
        root.style.setProperty('--link-visited-color', '#455de4');
        root.style.setProperty('--link-color', '#1657e4');
        root.style.setProperty('--stat-color', '#0060dd');
    } else {
        root.style.setProperty('--input-color', '#000');
        root.style.setProperty('--background-color', '#07114d');
        root.style.setProperty('--foreground-color', '#f3f3f3');
        root.style.setProperty('--link-visited-color', 'rgb(165, 170, 238);');
        root.style.setProperty('--link-color', '#3e75ee');
        root.style.setProperty('--stat-color', '#ffffb4');
    }
    isDark = !isDark;
    colorSchemeButton.value = isDark ? "Switch to Light Mode" : "Switch to Dark Mode";
}

function repeat(times, block) { for (let i = 0; i < times; i++) block(); }

removeAllButton.onclick = () => {
    let answer = confirm("Are you sure?");
    if (!answer) return;
    for (let i = 1; i <= MAX_MINION_SLOTS; i++) {
        MinionSlot.removeFromLocalStorage(i);
        MinionSlot.removeMinion(i);
    }
}

add24Button.onclick = () => {
    if (MinionSlot.totalSlots !== 0) {
        showStatus('You must not have any minions to add 24');
        return;
    }

    repeat(24, addMinionFromForm);
}


addButton.onclick = () => {
    if (MinionSlot.isFull()) {
        showStatus('No Free Minion Slots');
        return;
    }

    addMinionFromForm();
};

let minecraftFont = false;

fontButton.onclick = () => {
    let root = document.documentElement;
    if (minecraftFont) {
        root.style.setProperty('--main-font', '"Source Sans Pro", "Helvetica", "Arial", sans-serif');
        root.style.setProperty('--mono-font', '"Source Code Pro", "Menlo", "Monaco", "Consolas", monospace');
        minecraftFont = false;
        fontButton.value = 'Minecraft Font';
    } else {
        root.style.setProperty('--main-font', 'Minecraft');
        root.style.setProperty('--mono-font', 'Minecraft');
        fontButton.value = 'Normal font';
        minecraftFont = true;
    }
}

let timeout = null;

function showStatus(status, color, timeoutSeconds) {
    color = color || 'red';
    timeoutSeconds = timeoutSeconds || 6;
    console.trace(`Showing status: ${status}`);
    // if (timeout) {
    //     clearTimeout(timeout);
    // }
    let elt = document.getElementById('add-status');

    let statusElt = document.createElement('div');
    setTimeout(() => statusElt.style.transform = 'translate(0px, 0px)', 0);
    statusElt.style.color = color;
    statusElt.classList.add('status-element')
    statusElt.style['background-color'] = 'var(--background-color)';
    statusElt.textContent = status;
    timeout = setTimeout(() => {
        // statusElt.textContent = '';
        // statusElt.style['background-color'] = '';
        statusElt.style.transform = 'translate(0px, 100px)';
        setTimeout(() => {
            elt.removeChild(statusElt);
        }, 250);
        timeout = null;
    }, 1000 * timeoutSeconds);
    elt.appendChild(statusElt);
    return;

}

function addMinionFromForm() {
    let name = minionTypeDropdown.selectedItem;
    let level = levelDropdown.selectedItem;
    let fuel = fuelDropdown.selectedItem;
    let upgrade1 = upgrade1Dropdown.selectedItem;
    let upgrade2 = upgrade2Dropdown.selectedItem;
    let additionalBonusPercentage = document.getElementById('additional-bonus').value || 0;
    let sellPref = sellToDropdown.selectedItem;
    additionalBonusPercentage /= 100; // divide extra percentage to get fractional value
    if (name == 'none' && level == 'none') {
        showStatus("You must specify a minion type and a level.");
        return;
    } else {
        showStatus('');
    } // data verified 
    let minionSlot = new MinionSlot(name, level, fuel, upgrade1, upgrade2, additionalBonusPercentage, sellPref);
    minionSlot.toLocalStorage();
    minionSlot.render();
}

function shareConfiguration() {
    /*
        old means of sharing. just put every thing into a json array b64 it and 
        call it config

        I will still support decoding these urls via the presence of the config parameter
        but new share links will not use this format
        *********************************************
        let json = '[' + Object.values(SLOT_REGISTER).map(v => v === null ? "{}" : v.toShareableJSONString()).join(",") + ']';
        let data = btoa(json);
        
        let shareArea = document.getElementById('shareArea');
        let url = `https://skyblock-minion-calculator.herokuapp.com/?config=${data}`;
        shareArea.innerHTML = `<a href="${url}">${url}</a>`;
    */

    /*
        new system involves one query parameter per slot only if it exists
        So if you share one minion slot the url will have only sl1=<b64 data>
        and it also includes a count so that if 0 are shared there is still 
        something to check in the url 
    */
    let qs = '?';
    let count = 0;
    let n = 1;
    for (let slot of Object.values(SLOT_REGISTER)) {
        if (slot) {
            count++;
            qs += `s${n}=${btoa(slot.toShareableJSONString())}&`;
        }
        n++;
    }
    qs += `count=${count}`
    let shareArea = document.getElementById('shareArea');
    let url = `https://skyblock-minion-calculator.herokuapp.com/${qs}`;
    shareArea.innerHTML = `<a href="${url}">${url}</a>`;

}

function objectToSlot(data) {
    let obj = new MinionSlot(undefined, undefined, undefined, undefined, undefined, undefined, undefined, data.id);
    obj.name = data.name;
    obj.level = data.level;
    obj.fuel = data.fuel;
    obj.upgrade1 = data.upgrade1;
    obj.upgrade2 = data.upgrade2;
    obj.additionalBonusPercentage = data.additionalBonusPercentage;
    obj.occupied = data.occupied;
    obj.sellPreference = data.sellPreference;
    obj.updatePrices();
    SLOT_REGISTER[obj.id] = obj;
    MinionSlot.incrementMinionCount();
    return obj;
}

function loadLocalData() {
    let params = new URLSearchParams(window.location.search);
    let config = params.get('config');
    let hasSlots = params.get('count');


    if (config) {
        // old sharing url format
        let json = atob(config);
        let register = JSON.parse(json);
        for (let i = 0; i < MAX_MINION_SLOTS; i++) {
            if (!(Object.keys(register[i]).length === 0 && register[i].constructor === Object)) {
                let o = objectToSlot(register[i]);
                o.render(true);

            }
        }
    } else if (hasSlots) {
        // new sharing url format 
        for (let slot = 1; slot <= 24; slot++) {
            let b64 = params.get(`s${slot}`);
            if (b64) {
                let jsonString = atob(b64);
                let obj = JSON.parse(jsonString);
                let o = objectToSlot(obj);
                o.render(true);
            }
        }

    } else {
        for (let i = 1; i <= MAX_MINION_SLOTS; i++)
            MinionSlot.fromLocalStorage(i);
    }
}

window.onload = () => {

};