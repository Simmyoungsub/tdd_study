export class MarketItem {
    constructor(param) {
        this.name = param.name;
        this.price = param.price || 0;
    }

    setName(name) {
        this.name = name;
    }

    setPrice(price) {
        this.price = price;
    }
}