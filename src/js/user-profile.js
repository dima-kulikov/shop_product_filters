const testMarkup =`
<div class="user-profile">
<span class="cart-name">{{ brand }}: {{ name }}</span>
    <img class="avatars" src="{{ avatar }}" alt="">

    <ul class="info">
      <li><b>Модель:</b> {{ name }}</li>
      <li><b>Бренд:</b> {{ brand }}</li>
      <li><b>Экран:</b> {{ screen }}</li>
      <li><b>Цена:</b> {{ prise }}</li>
    // </ul>
  </div>
`;
const template = Handlebars.compile(testMarkup);


const testContainer = document.querySelector('.test-container');

const users = [
    {
        name:'NoteBook -1',
        avatar:'https://stylus.ua/thumbs/568x568/05/dc/1488261.jpeg',
        brand: "Xiaomi",
        prise: "32 600",
        screen: "15.6"
    },
    {
        name:'Laptop -1',
        avatar:'https://content2.rozetka.com.ua/goods/images/big/161140204.jpg',
        brand: "Asus",
        prise: "15 000",
        screen: "15.6"
    },
    {
        name:'ideapad  Platinum -1',
        avatar:'https://i1.foxtrot.com.ua/product/MediumImages/6488851_0.jpg',
        brand: "Lenovo",
        prise:"12 900 грн",
        screen: "15.6"
    },
    {
        name:'Pavilion -1',
        avatar:'https://i.eldorado.ua//goods_images/1039096/7012257-1614585648.jpg',
        brand: "HP",
        prise:"19 999 грн",
        screen: "15.6"
    },
    {
        name:'MacBook Air -1',
        avatar:'https://content1.rozetka.com.ua/goods/images/big/144249716.jpg',
        brand: "Apple",
        prise:"33 900 грн",
        screen: "13"
    },
    {
        name:'NoteBook -2',
        avatar:'https://stylus.ua/thumbs/568x568/05/dc/1488261.jpeg',
        brand: "Xiaomi",
        prise:"32 600 грн",
        screen: "15.6"
    },
    {
        name:'Laptop -2',
        avatar:'https://content2.rozetka.com.ua/goods/images/big/161140204.jpg',
        brand: "Asus",
        prise:"15 000 грн",
        screen: "15.6"
    },
    {
        name:'ideapad  Platinum -2',
        avatar:'https://i1.foxtrot.com.ua/product/MediumImages/6488851_0.jpg',
        brand: "Lenovo",
        prise:"12 900 грн",
        screen: "15.6"
    },
    {
        name:'Pavilion -2',
        avatar:'https://i.eldorado.ua//goods_images/1039096/7012257-1614585648.jpg',
        brand: "HP",
        prise:"19 999 грн",
        screen: "15.6"
    },
    {
        name:'MacBook Air -2',
        avatar:'https://content1.rozetka.com.ua/goods/images/big/144249716.jpg',
        brand: "Apple",
        prise:"33 900 грн",
        screen: "13"
    },
    {
        name:'NoteBook -3',
        avatar:'https://stylus.ua/thumbs/568x568/05/dc/1488261.jpeg',
        brand: "Xiaomi",
        prise:"32 600 грн",
        screen: "15.6"
    },
    {
        name:'Laptop -3',
        avatar:'https://content2.rozetka.com.ua/goods/images/big/161140204.jpg',
        brand: "Asus",
        prise:"15 000 грн",
        screen: "15.6"
    },
    {
        name:'ideapad  Platinum -3',
        avatar:'https://i1.foxtrot.com.ua/product/MediumImages/6488851_0.jpg',
        brand: "Lenovo",
        prise:"12 900 грн",
        screen: "15.6"
    },
    {
        name:'Pavilion -3',
        avatar:'https://i.eldorado.ua//goods_images/1039096/7012257-1614585648.jpg',
        brand: "HP",
        prise:"19 999 грн",
        screen: "15.6"
    },
    {
        name:'MacBook Air -3',
        avatar:'https://content1.rozetka.com.ua/goods/images/big/144249716.jpg',
        brand: "Apple",
        prise:"33 900 грн",
        screen: "13"
    },
    {
        name:'NoteBook -4',
        avatar:'https://stylus.ua/thumbs/568x568/05/dc/1488261.jpeg',
        brand: "Xiaomi",
        prise:"32 600 грн",
        screen: "15.6"
    },
    {
        name:'Laptop -4',
        avatar:'https://content2.rozetka.com.ua/goods/images/big/161140204.jpg',
        brand: "Asus",
        prise:"15 000 грн",
        screen: "15.6"
    },
    {
        name:'ideapad  Platinum -4',
        avatar:'https://i1.foxtrot.com.ua/product/MediumImages/6488851_0.jpg',
        brand: "Lenovo",
        prise:"12 900 грн",
        screen: "15.6"
    },
    {
        name:'Pavilion -4',
        avatar:'https://i.eldorado.ua//goods_images/1039096/7012257-1614585648.jpg',
        brand: "HP",
        prise:"19 999 грн",
        screen: "15.6"
    },
    {
        name:'MacBook Air -4',
        avatar:'https://content1.rozetka.com.ua/goods/images/big/144249716.jpg',
        brand: "Apple",
        prise:"33 900 грн",
        screen: "13"
    },

];


// users.filter(user => {
//     const test = template(user);
//     testContainer.insertAdjacentHTML("afterbegin", test);
// });

const menu = document.querySelector('.menu-container');



//фильтр выбора бренда
const fillContainer = (brand) => {
    let result = [];
    let filteredBrands = null;
    let computedBrand = window.location.hash.split('#')[1] || brand

    if (!computedBrand) {
        filteredBrands = users
    } else {
        filteredBrands = users.filter(us => us.brand === computedBrand);
    }
   

    filteredBrands.forEach(user => {
        const test = template(user);
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





//  users.filter(us=> min < us.prise && us.prise< max )
