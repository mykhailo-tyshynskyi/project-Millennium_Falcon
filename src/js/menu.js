const openMenuBtn = document.querySelector('.js-open-menu');
const closeMenuBtn = document.querySelector('.js-close-menu');
const mobileMenu = document.querySelector('.js-menu-container');

openMenuBtn.addEventListener('click', () => {
    mobileMenu.classList.add('is-open');
});

closeMenuBtn.addEventListener('click', () => {
    mobileMenu.classList.remove('is-open');
});
