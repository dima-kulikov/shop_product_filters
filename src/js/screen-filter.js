import data from '../data/testData.json';
import testTemplate from '../templates/test.hbs';

const testContainer = document.querySelector('.test-container');
const btnInputFilter = document.querySelector('#in-filter');
const checkboxGroup = document.getElementById('checkbox-group');

// const ids = [];

// const handleCheckbox = (e) => {
//    const { target } = e;

//    if (target.nodeName === 'INPUT') {
//       if (target.checked) {
//          ids.push(target.value);
//       } else {
//          const index = ids.indexOf(target.value);

//          ids.splice(index, 1);
//       } 
//    }
// };

// const handleFilter = () => {
//    const result = [];

//    if (!ids.length) return data

//    ids.forEach(id => {
//       result.push(...data.filter(item => item.screen === id))
//    })

//    return result
// };

// btnInputFilter.addEventListener('click', () => {
//    testContainer.innerHTML = testTemplate({ users: handleFilter() })
// });
// checkboxGroup.addEventListener('click', handleCheckbox);



// -----------------------------------------
const inFirst = document.querySelector('#first');
const inSecond = document.querySelector('#second');
const inThird = document.querySelector('#third');



btnInputFilter.addEventListener('click', () =>{
    if(inFirst.checked){
    const firstAnsver = data.filter(us=> us.screen == 13);
        testContainer.innerHTML = testTemplate({ users: firstAnsver })
     }
     if(inSecond.checked){
    const secondAnsver = data.filter(us=> us.screen == 15.6);
        testContainer.innerHTML = testTemplate({ users: secondAnsver })
     }
     if(inThird.checked){
    const thirdAnsver = data.filter(us=> us.screen == 18);
        testContainer.innerHTML = testTemplate({ users: thirdAnsver })
     }
   //   else{
   //    return  testContainer.innerHTML = testTemplate({ users: data })
   //   }
});