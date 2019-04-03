import { Lotto } from "./lotto";

describe('lotto test', () => {
    // 중복되지않는번호생성
    // 맞은 번호 세기
    // 등수

    test('hasDuplicatedNumber', () => {
        const lotto = new Lotto();
        const t1 = lotto.hasDuplicatedNumber([1, 2, 3, 1, 2, 3]);
        const t2 = lotto.hasDuplicatedNumber([1, 2, 3, 4, 5, 6]);
        expect(t1).toBeFalsy();
        expect(t2).toBeTruthy();
    });

    test('randomNumberMaker', () => {
        const lotto = new Lotto();
        const numbers = lotto.randomNumberMaker();
        const result = numbers.reduce((init, item) => (Object.assign(init, {[item]: 1})), {});
        const length = Object.keys(result).length;
        expect(length).toBe(6);
    });

    test('randomNumberMaker range', () => {
        const lotto = new Lotto();
        const numbers = lotto.randomNumberMaker();
        const result = numbers.reduce((init, item) => (init && (item <= Lotto.MAX_RANGE)), true);
        expect(result).toBeTruthy();
    });

    test('countMatchNumbers', () => {
        const lotto = new Lotto();
        const m1 = [1, 2, 3];
        const m2 = [1, 2, 3];
        const m3 = [4, 5, 6];
        const m4 = [3, 2, 1];
        expect(lotto.countMatchNumbers(m1, m2)).toBe(3);
        expect(lotto.countMatchNumbers(m1, m3)).toBe(0);
        expect(lotto.countMatchNumbers(m1, m4)).toBe(3);
    });

    test('getRank', () => {
        const lotto = new Lotto();
        const r1 = lotto.getRank(6);
        const r2 = lotto.getRank(5);
        const r3 = lotto.getRank(4);
        const r4 = lotto.getRank(3);
        const r5 = lotto.getRank(2);
        const r6 = lotto.getRank(1);
        expect(r1).toBe(1);
        expect(r2).toBe(2);
        expect(r3).toBe(3);
        expect(r4).toBe(4);
        expect(r5).toBe(-1);
        expect(r6).toBe(-1);
    });
});