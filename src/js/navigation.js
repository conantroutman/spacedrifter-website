let isHamburgerOpen = false;
const burger = document.querySelector('.burger');
const nav = document.querySelector('.navbar');

const navAnimation = () => {
    const siteLinks = document.querySelector('.site-nav').querySelectorAll('li');
    const socialLinks = document.querySelector('.social-nav').querySelectorAll('li');
    const direction = (isHamburgerOpen ? 'forwards' : 'backwards');

    siteLinks.forEach((link, index) => {
        link.style.animation ? link.style.animation = '' : link.style.animation = `navLinkFade 0.5s ease ${ index / 7 +  0.3 }s ${direction}`;
    })

    socialLinks.forEach((link, index) => {
        const fuck = siteLinks.length / 7 + nav.style.transition;
        link.style.animation ? link.style.animation = '' : link.style.animation = `navLinkFade 0.5s ease ${ (socialLinks.length - index) / 14 + ( 0.3 + 0.5) }s ${direction}`;
    })
}

const toggleMenu = () => {
    isHamburgerOpen = !isHamburgerOpen;
    // Prevent scrolling when menu is open
    isHamburgerOpen ? document.querySelector('body').style.overflowY = 'hidden' : document.querySelector('body').style.overflowY = 'scroll';
    burger.classList.toggle('is-active');
    nav.classList.toggle('navbar-active');
    
    navAnimation();
}

const navSlide = () => {
    burger.addEventListener('click', () => {
        toggleMenu();
    });

    const siteLinks = document.querySelectorAll('.site-link');
    
    siteLinks.forEach(element => {
        element.addEventListener('click', () => {
            toggleMenu();
        });
    });
}

navSlide();