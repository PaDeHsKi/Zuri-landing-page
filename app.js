const hamburger = document.querySelector('.header .nav-list .hamburger');
const mobile_menu = document.querySelector('.header .nav-list ul');
const menu_item = document.querySelector('.header .nav-list ul li a');
const header = document.querySelector('.header.container');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    mobile_menu.classList.toggle('active');
});


menu_item.forEach((item) => {
    item.addEventListener('click', () => {
        hamburger.classList.toggle('active');
        mobile_menu.classList.toggle('active');
    });
});