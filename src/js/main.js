import test from './test';

test.init();

document.getElementById('container').innerHTML = test.init();

document.getElementById('filter').addEventListener('click', () => {
    console.log(test.filter('1'));
})