import {Market} from './market';
import {MarketItem} from './marketItem';
/**
 * 물품을 판다.
 * 물품을 공급한다.
 * 물품을 몇개가지고있는가? (현황)
 */
describe('market test', () => {
    let market;

    beforeEach(() => {
        market = new Market();
    })
    test('품목 추가', () => {
        const candy = new MarketItem({name: '사탕', price: 200});
        market.add(candy);
        expect(market.howManyItems(candy)).toBeGreaterThanOrEqual(1);
    });
    test('품목을 n개 추가', () => {
        const candy = {name: '사탕', price: 200};
        market.adds(candy, 2);
        expect(market.howManyItems(candy)).toBeGreaterThan(1);
    })
    test('품목을 몇개나 가지고 있는지?', () => {
        const candy = new MarketItem({name: '사탕', price: 200});
        const choco = new MarketItem({name: '초코', price: 500});
        market.adds(candy, 5);
        market.adds(choco, 10);
        expect(market.howManyItems(candy)).toBe(5);
        expect(market.howManyItems(choco)).toBe(10);
    });

    test('물품을 판다.', () => {
        const candy = {name: '사탕', price: 200};
        market.adds(candy, 5);
        const i = market.sell(new MarketItem(candy));
        expect(market.howManyItems(new MarketItem(candy))).toBe(4);
        expect(i).toBeDefined();
        expect(i instanceof MarketItem).toBeTruthy();
    });
})