export class MarketItem {
    constructor(param) {
        this.name = param.name;
        this.price = param.price;
    }

    setName(name) {
        this.name = name;
    }

    setPrice(price) {
        this.price = price;
    }
}