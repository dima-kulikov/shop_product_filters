import data from '../data/testData.json';
import testTemplate from '../templates/test.hbs';


const inFirst = document.querySelector('#first');
const inSecond = document.querySelector('#second');
const inThird = document.querySelector('#third');
const btnInputFilter = document.querySelector('#in-filter');
const testContainer = document.querySelector('.test-container');

btnInputFilter.addEventListener('click', () =>{
    if(first.checked){
        console.log("работает")
     }else{
        console.log("sadsadsadsa")
     }
});