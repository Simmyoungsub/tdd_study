/**
 * 각 숫자는 1 ~ 9 범위내의 중복되지않은 3개의 숫자
 * 자리는 틀리고 번호가 3숫자 안에 있으면 ball
 * 자리의 번호가 맞으면 strike
 * 3숫자 안에 숫자가 없으면 out
 */
import { Baseball } from './baseball';

describe('baseball', () => {
    test('checkNumbers', () => {
        const baseball = new Baseball();
        expect(baseball.checkNumbers('1 2 3')).toBeTruthy();
        expect(baseball.checkNumbers('10 2 3')).toBeFalsy();
        expect(baseball.checkNumbers('123')).toBeFalsy();
        expect(baseball.checkNumbers('')).toBeFalsy();
    });

    test('compare', () => {
        const baseball = new Baseball();
        expect(baseball.compare(baseball.numberSplitter('1 2 3'), baseball.numberSplitter('1 2 3'))).toEqual(['s', 's', 's']);
        expect(baseball.compare(baseball.numberSplitter('1 2 3'), baseball.numberSplitter('3 1 2'))).toEqual(['b', 'b', 'b']);
        expect(baseball.compare(baseball.numberSplitter('1 2 3'), baseball.numberSplitter('4 5 6'))).toEqual(['o', 'o', 'o']);
        expect(baseball.compare(baseball.numberSplitter('1 2 3'), baseball.numberSplitter('1 3 2'))).toEqual(['s', 'b', 'b']);
        expect(baseball.compare(baseball.numberSplitter('1 2 3'), baseball.numberSplitter('4 6 2'))).toEqual(['o', 'o', 'b']);
    })
});
