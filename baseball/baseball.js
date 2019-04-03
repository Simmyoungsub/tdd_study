export class Baseball {
    constructor() {
        this.baseNumber = this.makeBaseNumber();
    }

    makeBaseNumber() {
        const baseNumber = [];

        while(baseNumber.length < 3) {
            const value = Math.floor((Math.random() * 10)) + 1;
            if (!(baseNumber.includes(value))) {
                baseNumber.push(value);
            } 
        }

        return baseNumber;
    }

    checkNumbers(param) {
        const numbers = this.numberSplitter(param);
        if (numbers.length !== 3) {
            return false;
        }

        for (const number of numbers) {
            if (number >= 10 || number < 1) {
                return false;
            }
        }

        return true;
    }

    numberSplitter(param) {
        const seperator = ' ';
        return param.split(seperator).map((item) => (Number(item)));
    }

    compare(src, tgt) {
        const result = [];

        for (let i=0;i<src.length;i++) {
            const sNm = src[i];
            const tNm = tgt[i];

            if (sNm === tNm) {
                result.push('s');
                continue;
            }

            if (src.includes(tNm)) {
                result.push('b');
                continue;
            }

            result.push('o');
        }

        return result;
    }
}