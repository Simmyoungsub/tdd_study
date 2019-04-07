import { Operation } from "./operation";

describe('operation test', () => {
    test('add event success', () => {
        const operation = new Operation();
        expect(
            operation.on('hello', (msg) => (console.log('hello')))
        ).toBeDefined();
    });

    test('add event exception', () => {
        const operation = new Operation();
        expect(() => (operation.on(undefined, null))).toThrow();
    });
});