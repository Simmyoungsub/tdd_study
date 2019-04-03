import match from './baseball';
import lt from './lotto';
import so from './client';

const numbers = document.getElementById('numbers');
const lottoInput = document.getElementById('lottoInput');

document.getElementById('btn').addEventListener('click', () => {
    const value = numbers.value;
    const result = match(`${value}`).result;
    console.log(result);
});

document.getElementById('lotto').addEventListener('click', () => {
    const value = lottoInput.value.split(',').map((item) => (Number(item)));
    const result = lt(value);

    console.log(result);
});

// document.getElementById('lotto').addEventListener('click', () => {
//     const value = lottoInput.value.split(',').map((item) => (Number(item)));
//     const result = lt(value);

//     console.log(result);
// });