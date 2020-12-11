let isHamburgerOpen = false;
const burger = document.querySelector('.burger');
const nav = document.querySelector('.navbar');

const navAnimation = () => {
    const siteLinks = document.querySelector('.site-nav').querySelectorAll('li');
    const socialLinks = document.querySelector('.social-nav').querySelectorAll('li');
    const direction = (isHamburgerOpen ? 'forwards' : 'backwards');

    siteLinks.forEach((link, index) => {
        link.style.animation ? link.style.animation = '' : link.style.animation = `navLinkFade 0.5s ease ${ index / 7 +  0.3 }s ${direction}`;
        console.log(link.style.animation)
    })

    socialLinks.forEach((link, index) => {
        link.style.animation ? link.style.animation = '' : link.style.animation = `navLinkFade 0.5s ease ${ (socialLinks.length - index) / 14 + ( 0.3 + 0.5) }s ${direction}`;
    })
}

const clearAnimation = () => {
    const siteLinks = document.querySelector('.site-nav').querySelectorAll('li');
    const socialLinks = document.querySelector('.social-nav').querySelectorAll('li');

    siteLinks.forEach((link) => {
        link.style.animation = ''
    })

    socialLinks.forEach((link) => {
        link.style.animation = ''
    })
}

const openMenu = () => {
    console.log("Opening")
    // Prevent scrolling when menu is open
    document.querySelector('body').style.overflowY = 'hidden';
    burger.classList.add('is-active');
    nav.classList.add('navbar-active');
    navAnimation();
}

const closeMenu = () => {
    console.log("Closing")
    document.querySelector('body').style.overflowY = 'scroll';
    burger.classList.remove('is-active');
    nav.classList.remove('navbar-active');
    clearAnimation();
}

const toggleMenu = () => {
    isHamburgerOpen = !isHamburgerOpen;
    isHamburgerOpen ? openMenu() : closeMenu();
    
}

const navSlide = () => {
    burger.addEventListener('click', () => {
        toggleMenu();
    });

    const siteLinks = document.querySelectorAll('.site-link');
    
    siteLinks.forEach(element => {
        element.addEventListener('click', () => {
            isHamburgerOpen = false;
            closeMenu();
        });
    });
}

navSlide();