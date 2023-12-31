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
}());

// Burger handler

(function () {
    const burgerItem = document.querySelector('.burger');
    const menu = document.querySelector('.header_nav');
    const buttonClose = document.querySelector('.header_nav_close');
    const menuArticle = document.querySelector('.header_article');
    const menuLocations = document.querySelector('.header_locations');
    const menuVideos = document.querySelector('.header_videos');
    const menuSign = document.querySelector('.header_signing');
    
    burgerItem.addEventListener('click', () => {
        menu.classList.add('header_nav_active');
    });

    menuArticle.addEventListener('click', () => {
        menu.classList.remove('header_nav_active');
    });
    menuLocations.addEventListener('click', () => {
        menu.classList.remove('header_nav_active');
    });
    menuVideos.addEventListener('click', () => {
        menu.classList.remove('header_nav_active');
    });
    menuSign.addEventListener('click', () => {
        menu.classList.remove('header_nav_active');
    });

    buttonClose.addEventListener('click', () => {
        menu.classList.remove('header_nav_active');
    });

}());

// Scroll to anchors
(function () {

    const smoothScroll = function (targetEl, duration) {
        const headerElHeight =  document.querySelector('.header').clientHeight;
        let target = document.querySelector(targetEl);
        let targetPosition = target.getBoundingClientRect().top - headerElHeight;
        let startPosition = window.scrollY;
        let startTime = null;
    
        const ease = function(t,b,c,d) {
            t /= d / 2;
            if (t < 1) return c / 2 * t * t + b;
            t--;
            return -c / 2 * (t * (t - 2) - 1) + b;
        };
    
        const animation = function(currentTime){
            if (startTime === null) startTime = currentTime;
            const timeElapsed = currentTime - startTime;
            const run = ease(timeElapsed, startPosition, targetPosition, duration);
            window.scrollTo(0,run);
            if (timeElapsed < duration) requestAnimationFrame(animation);
        };
        requestAnimationFrame(animation);

    };

    const scrollTo = function () {
        const links = document.querySelectorAll('.js-scroll');
        links.forEach(each => {
            each.addEventListener('click', function () {
                const currentTarget = this.getAttribute('href');
                smoothScroll(currentTarget, 1000);
            });
        });
    };
    scrollTo();
}());
