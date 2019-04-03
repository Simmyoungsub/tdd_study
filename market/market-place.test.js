import {MarketPlace} from './market-place';
import { Market } from './market';

/**
 * 마켓별 품목 비교
 * 가격비교
 * 상품정렬
 * 마켓 / 최저가격
 * 마켓 / 최대가격
 * 마켓별 품복 리스트
 * 마켓 등록
 * 제공되는 마켓 목록
 */
describe('MarketPlace Test', () => {
    let marketPlace;

    beforeEach(() => {
        marketPlace = new MarketPlace();

        const marketA = new Market();
        marketA.adds({'name': '사탕', 'price': 200});
        marketA.adds({'name': '초코', 'price': 500});
        marketA.setName('A 마트');

        const marketB = new Market();
        marketB.adds({'name': '사탕', 'price': 200});
        marketB.adds({'name': '초코', 'price': 500});
        marketB.setName('B 마트');

        marketPlace.add(marketA);
        marketPlace.add(marketB);
    });

    test('마켓 등록', () => {
        expect(marketPlace.markets.length).toBe(2);
    });

    test('마켓 목록', () => {
        expect(marketPlace.getMarkets().join(',')).toBe('A 마트,B 마트');
    });
});