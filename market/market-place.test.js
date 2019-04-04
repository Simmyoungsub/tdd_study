import {MarketPlace} from './market-place';
import { Market } from './market';
import { MarketItem } from './marketItem';

/**
 * 상품 구매하기
 */
describe('MarketPlace Test', () => {
    let marketPlace;

    beforeEach(() => {
        marketPlace = new MarketPlace();

        const marketA = new Market();
        marketA.adds({'name': '사탕', 'price': 200}, 10);
        marketA.adds({'name': '초코', 'price': 500}, 10);
        marketA.setName('A 마트');

        const marketB = new Market();
        marketB.adds({'name': '사탕', 'price': 400}, 10);
        marketB.adds({'name': '초코', 'price': 300}, 10);
        marketB.setName('B 마트');

        marketPlace.add(marketA);
        marketPlace.add(marketB);
    });

    test('마켓 등록', () => {
        expect(marketPlace.markets.length).toBe(2);
    });

    test('마켓 목록', () => {
        expect(marketPlace.getMarkets().map((i) => (i.name)).join(',')).toBe('A 마트,B 마트');
    });

    describe('마켓 찾기', () => {
        test('마켓이 존재하면', () => {
            const market = new Market();
            market.setName('A 마트');
            const info = marketPlace.getMarket(market);
            expect(info.name).toBe('A 마트');
        });
        
        test('마켓이 존재하지 않는다면', () => {
            const market = new Market();
            market.setName('D 마트');
            const info = marketPlace.getMarket(market);
            expect(info).not.toBeDefined();
        })
    });

    describe('검색', () => {
        let result;
        const itemName = '사탕';

        beforeEach(() => {
            result = marketPlace.search(itemName);
        });

        test('물품 검색', () => {
            expect(result).toBeDefined();
            expect(result.search.name).toBe(itemName);
            expect(result.result.length).toBe(2);
        });

        test('최저가', () => {
            const data = result.result;
            const sortLowest = marketPlace.sortLowestPrice(data);
            const min = sortLowest.map((i) => (i.price)).reduce((init, i) => (init < i ? init : i), Infinity);
            expect(min).toBe(data[0].price);
        });

        test('최고가', () => {
            const data = result.result;
            const sortHighest = marketPlace.sortHighestPrice(data);
            const max = sortHighest.map((i) => (i.price)).reduce((init, i) => (init > i ? init : i), -Infinity);
            expect(max).toBe(data[0].price);
        });
    });

    test('상품 구매하기', () => {
        const candy = new MarketItem({name: '사탕', price: 200});
        const market = new Market();
        market.setName('A 마트');
        const transaction = marketPlace.request(market, candy);
        console.log(transaction);
        expect(transaction.name).toBe(candy.name);
    });
});