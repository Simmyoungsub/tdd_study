'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

// module.exports = (() => {
//     const checkNumbers = ((param) => {
//         const seperator = ' ';
//         const numbers = param.split(seperator);

//         if (numbers.length !== 3) {
//             return false;
//         }

//         for (const number of numbers) {
//             if (number >= 10 || number < 1) {
//                 return false;
//             }
//         }

//         return true;
//     });
// });

var Baseball = exports.Baseball = function () {
    function Baseball() {
        _classCallCheck(this, Baseball);

        this.baseNumber = this.makeBaseNumber();
    }

    _createClass(Baseball, [{
        key: 'makeBaseNumber',
        value: function makeBaseNumber() {
            var baseNumber = [];

            while (baseNumber.length < 3) {
                var value = Math.floor(Math.random() * 10) + 1;
                if (!baseNumber.includes(value)) {
                    baseNumber.push(value);
                }
            }

            return baseNumber;
        }
    }, {
        key: 'checkNumbers',
        value: function checkNumbers(param) {
            var numbers = this.numberSplitter(param);
            if (numbers.length !== 3) {
                return false;
            }

            var _iteratorNormalCompletion = true;
            var _didIteratorError = false;
            var _iteratorError = undefined;

            try {
                for (var _iterator = numbers[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
                    var number = _step.value;

                    if (number >= 10 || number < 1) {
                        return false;
                    }
                }
            } catch (err) {
                _didIteratorError = true;
                _iteratorError = err;
            } finally {
                try {
                    if (!_iteratorNormalCompletion && _iterator.return) {
                        _iterator.return();
                    }
                } finally {
                    if (_didIteratorError) {
                        throw _iteratorError;
                    }
                }
            }

            return true;
        }
    }, {
        key: 'numberSplitter',
        value: function numberSplitter(param) {
            var seperator = ' ';
            return param.split(seperator);
        }
    }, {
        key: 'compare',
        value: function compare(src, tgt) {
            var result = [];

            for (var i = 0; i < src.length; i++) {
                var sNm = src[i];
                var tNm = tgt[i];

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
    }]);

    return Baseball;
}();
