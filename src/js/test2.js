// import data from '../data/testData.json';
// import testTemplate from '../templates/test.hbs';

// //фильтр выбора бренда
// const fillContainer = (brand) => {
//     let result = [];
//     let filteredBrands = null;
//     let computedBrand = window.location.hash.split('#')[1] || brand

//     if (!computedBrand) {
//         filteredBrands = data
//     } else {
//         filteredBrands = data.filter(us => us.brand === computedBrand);
//     }
   

//     filteredBrands.forEach(item => {
//         result.push(testTemplate(item));
//         return result;
//     });

     
// }

// fillContainer();
// testContainer.innerHTML = result.join('');

// // действие при клике, конкретной кнопки
// menu.addEventListener('click', function (event) {
//     const target = event.target;
    
//     if (target.classList.contains('btn') && target.dataset.name) {
//         const brand = target.dataset.name;
//         window.location.hash = brand
//         fillContainer(brand);
//     }
// });