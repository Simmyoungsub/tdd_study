import {MarketItem} from './marketItem';
import { exportAllDeclaration } from '@babel/types';
/**
 * 이름
 * 가격
 */
describe('MarketItem Test', () => {
    let marketItem;
    beforeEach(() => {
        marketItem = new MarketItem({});
    });
    test('이름, 가격', () => {
        marketItem.setName('사탕');
        marketItem.setPrice(200);
        expect(marketItem.name).toBe('사탕');
        expect(marketItem.price).toBe(200);
    })
});