import { MarketItem } from "./marketItem";

export class MarketPlace {
    constructor() {
        this.markets = [];
    }

    add(market) {
        this.getMarkets().push(market);
    }

    getMarkets() {
        return this.markets;
    }

    getMarket(market) {
        return this.getMarket().find((item) => (item.name === market.name));
    }

    search(itemName) {
        return {
            search: { name: itemName },
            result: this.getMarkets().filter((market) => (market.howManyItems(new MarketItem({ name: itemName })) > 0))
                .map((market) => ({
                    market: market,
                    item: market.getItem(itemName)
                }))
        };
    }

    sortLowestPrice(data) {
        return data.sort((i1, i2) => (i1.price - i2.price));
    }

    sortHighestPrice(data) {
        return data.sort((i1, i2) => (i2.price - i1.price));
    }

    request(market, item) {
        const mk = this.getMarket(market);
        return mk ? mk.sell(item) : mk; 
    }
}