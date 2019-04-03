'use strict';

var _baseball = require('./baseball');

var baseball = new _baseball.Baseball();
var sourceNumber = baseball.baseNumber;

module.exports = {
    match: function match(param) {
        var result = baseball.compare(sourceNumber, param);
        var success = result.join() === ['s', 's', 's'].join();

        return {
            success: success,
            result: result
        };
    }
};
