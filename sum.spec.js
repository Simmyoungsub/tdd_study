const sum = require('./sum');

describe('my coverage', () => {
    test('adds 1 + 2 to equal 3', () => {
        expect(sum(1, 2)).toBe(3);
    });
    
    test('tobe 랑 toequal 결과', () => {
        const o1 = {a: 1};
        const o2 = {a: 1};
    
        expect(o1).toEqual(o2);
        
        o2.a = 2;
        expect(o1).not.toEqual(o2);
    
        o2.a = 1;
        o2['b'] = 10;
        expect(o1).not.toEqual(o2);

        delete o2.b;
        expect(o1).toEqual(o2);
    })    
})