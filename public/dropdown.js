class Dropdown {
    constructor(elementId) {
        this.id = elementId;
        this.element = document.getElementById(elementId);
        this.options = new Array(this.element.options.length).fill(0).map((value, idx) => this.element.options[idx].value);
    }

    indexOf(optionName) {
        let idx = 0;
        for (const option of this.options) {
            if (option == optionName)
                return idx;
            idx++;
        }
        return -1;
    }

    get selectedItem() {
        return this.element.options[this.element.selectedIndex].value;
    }

    set selectedItem(item) {
        const index = this.indexOf(item);
        if (index === -1)
            throw new Error(`No such element in option: ${item}`);
        this.element.selectedIndex = index;
    }

    get selectedIndex() {
        return this.element.selectedIndex;
    }

    set selectedIndex(index) {
        this.element.selectedIndex = index;
    }
}