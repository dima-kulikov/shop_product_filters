import test from './test';

test.init();

document.getElementById('container').innerHTML = test.init();

document.getElementById('filter').addEventListener('click', () => {
    console.log(test.filter('1'));
})

// Фильтр цены от и до

const btnPrice = document.querySelector('#btn__price');
let minPrice = document.getElementById("min-price");
let maxPrice = document.getElementById("max-price");

console.log(minPrice.value);

btnPrice.addEventListener('click', ()=>{});
