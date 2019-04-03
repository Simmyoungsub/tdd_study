import express from 'express';

test('jest toBeDefined', () => {
    const s = {};
    expect(s).toBeDefined();
    expect(s).toEqual(expect.anything());
})

describe('express server test', () => {
    test('express is not undefined', () => {
        const app = express();
        expect(app).toBeDefined();
    })
});