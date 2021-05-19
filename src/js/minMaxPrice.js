import data from '../data/testData.json';
import testTemplate from '../templates/test.hbs';
const testContainer = document.querySelector('.test-container');


const upPrice = document.querySelector('#price-up');
const downPrice = document.querySelector('#price-down');



upPrice.addEventListener('click', () => {

    const sortPrice = (a,b) => a.prise - b.prise;
    const sortStart = data.sort(sortPrice);
    
    testContainer.innerHTML = testTemplate({ users: sortStart })

});

downPrice.addEventListener('click', () => {

    const sortPrice = (a,b) => b.prise - a.prise;
    const sortStart = data.sort(sortPrice);
    
    testContainer.innerHTML = testTemplate({ users: sortStart })

});
