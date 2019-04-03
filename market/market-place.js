export class MarketPlace {
    constructor() {
        this.markets = [];
    }

    add(market) {
        this.markets.push(market);
    }

    getMarkets() {
        return this.markets.map((item) => (item.name));
    }
}