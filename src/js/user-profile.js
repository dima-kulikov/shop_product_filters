import data from '../data/testData.json';
import testTemplate from '../templates/test.hbs';

const testContainer = document.querySelector('.test-container');
const menu = document.querySelector('.menu-container');

//фильтр выбора бренда
const fillContainer = (brand) => {
    let result = [];
    let filteredBrands = null;
    let computedBrand = window.location.hash.split('#')[1] || brand

    if (!computedBrand) {
        filteredBrands = data
    } else {
        filteredBrands = data.filter(us => us.brand === computedBrand);
    }
   

    filteredBrands.forEach(user => {
        const test = testTemplate(user);
        result.push(test);
    });

    testContainer.innerHTML = result.join('');
}

fillContainer();

// действие при клике, конкретной кнопки
menu.addEventListener('click', function (event) {
    const target = event.target;
    
    if (target.classList.contains('btn') && target.dataset.name) {
        const brand = target.dataset.name;
        window.location.hash = brand
        fillContainer(brand);
    }
});



// Фильтр цены от и до

//  users.filter(us=> min < us.prise && us.prise< max )


const btnPrice = document.querySelector('#btn__price');
const minPrice = document.getElementById("min-price");
const maxPrice = document.getElementById("max-price");



btnPrice.addEventListener('click', ()=>{
    let resultPrice = [];

  const filteredPrice = data.filter(us=> minPrice.value < us.prise && us.prise< maxPrice.value );

   filteredPrice.forEach(user => {
    const testPrise = testTemplate(user);
    resultPrice.push(testPrise);
});

testContainer.innerHTML = resultPrice.join('');
console.log(minPrice.value);
console.log(maxPrice.value);
// console.log(data);
// console.log(data.price);
let ids = []
// const pp = data.forEach((value) => {
//     ids.push(value.prise);
// });

console.log(ids);
// console.log(data[1].prise);
// console.log(resultPrice);
});