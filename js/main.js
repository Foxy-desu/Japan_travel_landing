(function () {
    const header = document.querySelector('.header');
    window.onscroll = () => {
        if (window.scrollY > 50) {
            header.classList.add('header_active');
        }
        else {
            header.classList.remove('header_active');
        }
    }
}())

// Burger handler

(function () {
    const burgerItem = document.querySelector('.burger');
    const menu = document.querySelector('.header_nav');
    const buttonClose = document.querySelector('.header_nav_close');
    
    burgerItem.addEventListener('click', () => {
        menu.classList.add('header_nav_active');
    });
    buttonClose.addEventListener('click', () => {
        menu.classList.remove('header_nav_active');
    })

}());
