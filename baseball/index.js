import { Baseball } from './baseball';

const baseball = new Baseball();
const sourceNumber = baseball.baseNumber;

export default ((param) => {
    if (!baseball.checkNumbers(param)) {
        return {
            success: false,
            result: []
        }
    }

    const input = baseball.numberSplitter(param);
    const result = baseball.compare(sourceNumber, input);
    const success = result.join() === ['s', 's', 's'].join();

    return {
        success: success,
        result: result
    };
});