
const burger = document.getElementById('burger');
const navigation = document.getElementById('navigation')
const ul = document.getElementById('ul')
const burgerSpan = burger.querySelector('span');
let clickCounter = 0;

burger.addEventListener('click', () => {
    clickCounter++;
    burger.classList.add('active');
    burgerSpan.classList.add('burger-active');
    navigation.classList.add('block');
    navigation.classList.add('new')
    ul.classList.add('flex-active');

    if (clickCounter === 2) {
        clickCounter = 0;
        burger.classList.remove('active')
        burgerSpan.classList.remove('burger-active');
        navigation.classList.remove('block')
        navigation.classList.remove('new');
        ul.classList.remove('flex-active');
    }

});
