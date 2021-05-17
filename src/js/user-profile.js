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