import data from '../data/testData.json';
import testTemplate from '../templates/test.hbs';


const inFirst = document.querySelector('#first');
const inSecond = document.querySelector('#second');
const inThird = document.querySelector('#third');
const btnInputFilter = document.querySelector('#in-filter');
const testContainer = document.querySelector('.test-container');

btnInputFilter.addEventListener('click', () =>{
    if(first.checked){
    const firstAnsver = data.filter(us=> us.screen == 13);
        testContainer.innerHTML = testTemplate({ users: firstAnsver })
     }
     if(second.checked){
    const secondAnsver = data.filter(us=> us.screen == 15.6);
        testContainer.innerHTML = testTemplate({ users: secondAnsver })
     }
     if(third.checked){
    const thirdAnsver = data.filter(us=> us.screen == 18);
        testContainer.innerHTML = testTemplate({ users: thirdAnsver })
     }
     else{
        testContainer.innerHTML = testTemplate({ users: data })
     }
});