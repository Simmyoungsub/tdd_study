export class Lotto {
    static get NUNBER_LENGTH() {
        return 6;
    };

    static get MAX_RANGE() {
        return 45;
    }

    constructor() {
        this.lottoNumbers = this.randomNumberMaker();
    }

    randomNumberMaker() {
        const numbers = [];

        while (numbers.length !== Lotto.NUNBER_LENGTH) {
            const n = Math.floor(Math.random() * Lotto.MAX_RANGE) + 1;
            if (!(numbers.includes(n))) {
                numbers.push(n);
            }
        }

        if (!this.hasDuplicatedNumber(numbers)) {
            throw new Error('duplicate number ' + numbers.join());
        }

        numbers.sort();
        return numbers;
    }

    hasDuplicatedNumber(param) {
        return Object.keys(param.reduce((init, item) => (Object.assign(init, {[item]: 1})), {})).length === Lotto.NUNBER_LENGTH;
    }

    countMatchNumbers(src, tgt) {
        let count = 0;

        for (const n of tgt) {
            count += (+src.includes(n));
        }

        return count;
    }

    getRank(count) {
        switch (count) {
            case Lotto.NUNBER_LENGTH:
                return 1;
            case (Lotto.NUNBER_LENGTH - 1):
                return 2;
            case (Lotto.NUNBER_LENGTH - 2):
                return 3;
            case (Lotto.NUNBER_LENGTH - 3):
                return 4;
            default:
                return -1;
        }
    }
}