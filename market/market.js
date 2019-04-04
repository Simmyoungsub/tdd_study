import {MarketItem} from './marketItem';

export class Market {
    constructor() {
        this.items = {};
    }

    setName(name) {
        this.name = name;
    }

    howManyItems(item) {
        if (!this.items[item.name]) {
            return 0;
        }

        return this.items[item.name].length;
    }

    add(item) {
        if (!this.items[item.name]) {
            this.items[item.name] = [];
        }
        this.items[item.name].push(item);
    }

    adds(item, count) {
        for (let i=0;i<count;i++) {
            this.add(new MarketItem(item));
        }
    }

    sell(item) {
        if (this.howManyItems(item) === 0) {
            return null;
        }

        return this.items[item.name].shift();
    }

    getItem(itemName) {
        if (!this.items[itemName]) {
            return null;
        }

        return this.items[itemName][0];
    }
}