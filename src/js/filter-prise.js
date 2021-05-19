import data from '../data/testData.json';
import testTemplate from '../templates/test.hbs';

const btnPrice = document.querySelector('#btn__price');
const minPrice = document.getElementById("min-price");
const maxPrice = document.getElementById("max-price");
const testContainer = document.querySelector('.test-container');



btnPrice.addEventListener('click', () => {
  const filteredPrice = data.filter(us=> minPrice.value < us.prise && us.prise< maxPrice.value);

  testContainer.innerHTML = testTemplate({ users: filteredPrice })
});