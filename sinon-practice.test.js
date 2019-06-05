const sinon = require('sinon');
describe('sinon practice', () => {
    afterEach(() => {
        sinon.restore();
    });
    describe('spy', () => {
        test('withArgs', () => {
            const object = {
                count: 1,
                method: function (num) {
                    return this.count++;
                }
            };
            const spy = sinon.spy(object, 'method');

            object.method(42);

            console.log(spy.withArgs(45).calledOnce);

            expect(spy.withArgs(42).calledOnce).toBeTruthy();
        });

        test('function use new ? ', () => {
            const A = function () {
                console.log(this.a);
                return {
                    getProp: function() {
                        return this.a;
                    }
                }
            };

            const result = A.call({a: 200}).getProp();
            console.log(result);
        });

        test('compare', () => {
            const comp1 = function(id, num) {
                const card = function() {
                    return {};
                }();

                if (card) {
                    card.title = ''
                }
            }
        });
    });
});