const _ = require('lodash');
const sinon = require('sinon');
const PubSub = require('pubsub-js');
describe('jest vs sinon', () => {

    afterEach(() => {
        sinon.restore();
    });

    describe('mocking', () => {
        test('by jest', () => {
            jest.mock('./Mocki.js');
            const Mocki = require('./Mocki.js');
            const mMock = jest.fn().mockReturnValue('mocki1');
            Mocki.mockImplementation(() => {
                return {
                    getName: mMock
                }
            });

            const mocki = new Mocki('mocki1');
            const name = mocki.getName();
            console.log(name);
            expect(name).toBe('mocki1');
        });

        test('by sinon', () => {
            const Mocki = require('./Mocki');
            const mocki = new Mocki('');
            const mock = sinon.mock(mocki); // return expectation
            mock.expects('getName') // return expectation
                .returns('mocki1');

            const name = mocki.getName();

            mock.verify(); // mocking한 항목에 대한 호출이 있었는지 확인

            expect(name).toBe('mocki1');
        });
    });

    describe('spy', () => {
        test('by jest', () => {

        });

        test('by sinon', () => {
            const callback = sinon.spy();
            PubSub.subscribe("message", callback);

            PubSub.publishSync("message", 'hello spy');

            expect(callback.called).toBeTruthy();
            expect(callback.args[0][1]).toBe('hello spy');
        });
    });
});