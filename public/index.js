const STATUS_YELLOW = 'rgb(255, 191, 0)';
const STATUS_RED = 'red';

const fuelDropdown = new DropDown('fuel');
const upgrade1Dropdown = new DropDown('upgrade1');
const upgrade2Dropdown = new DropDown('upgrade2');
const minionTypeDropdown = new DropDown('type-select');
const sellToDropdown = new DropDown('sell-place-preference');
const levelDropdown = new DropDown('level-select');

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
    timeoutSeconds = timeoutSeconds || 10;
    if (timeout) {
        clearTimeout(timeout);
    }
    let elt = document.getElementById('add-status');
    elt.style.color = color;
    elt.textContent = status;
    timeout = setTimeout(() => {
        elt.textContent = '';
        timeout = null;
    }, 1000 * timeoutSeconds);
    return;

}

function addMinionFromForm() {
    let name = minionTypeDropdown.getSelectedItem();
    let level = levelDropdown.getSelectedItem();
    let fuel = fuelDropdown.getSelectedItem();
    let upgrade1 = upgrade1Dropdown.getSelectedItem();
    let upgrade2 = upgrade2Dropdown.getSelectedItem();
    let additionalBonusPercentage = document.getElementById('additional-bonus').value || 0;
    let sellPref = sellToDropdown.getSelectedItem();
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
    let json = '[' + Object.values(SLOT_REGISTER).map(v => v === null ? "{}" : v.toShareableJSONString()).join(",") + ']';
    let data = btoa(json);

    let shareArea = document.getElementById('shareArea');
    let url = `https://skyblock-minion-calculator.herokuapp.com/?config=${data}`;
    shareArea.innerHTML = `<a href="${url}">${url}</a>`;

}

window.onload = () => {
    let params = new URLSearchParams(window.location.search);
    let config = params.get('config');

    if (config) {
        let json = atob(config);
        console.log(json);
        let register = JSON.parse(json);
        console.log(register);
        for (let i = 0; i < MAX_MINION_SLOTS; i++) {
            if (!(Object.keys(register[i]).length === 0 && register[i].constructor === Object)) {
                let obj = new MinionSlot(undefined, undefined, undefined, undefined, undefined, undefined, undefined, i);
                obj.name = register[i].name;
                obj.level = register[i].level;
                obj.fuel = register[i].fuel;
                obj.upgrade1 = register[i].upgrade1;
                obj.upgrade2 = register[i].upgrade2;
                obj.additionalBonusPercentage = register[i].additionalBonusPercentage;
                obj.occupied = register[i].occupied;
                obj.sellPreference = register[i].sellPreference;
                console.log(obj);
                obj.updatePrices();
                obj.render();
                SLOT_REGISTER[i] = obj;
                MinionSlot.incrementMinionCount();
            }
        }
    } else {
        // this should trigger when Bazaar prices are loaded
        // otherwise all prices will be from the NPC since 
        // bazaar prices will be undefined
        // for (let i = 1; i <= MAX_MINION_SLOTS; i++)
        //     MinionSlot.fromLocalStorage(i);
    }
};