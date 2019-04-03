import {Lotto} from './lotto';

const lotto = new Lotto();

export default ((input) => {
    const count = lotto.countMatchNumbers(lotto.lottoNumbers, input);
    console.log(count);
    const result = lotto.getRank(count);
    if (result === -1) {
        return {
            message: `꽝: 당첨번호 - ${lotto.lottoNumbers.join(', ')}`
        }
    }
    return {
        message: `${result} 등: 당첨번호 - ${lotto.lottoNumbers.join(', ')}`
    }
});