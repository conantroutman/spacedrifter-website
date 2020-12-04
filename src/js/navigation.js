const navSlide = () => {
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.navbar');

    burger.addEventListener('click', () => {
        burger.classList.toggle('is-active');
        nav.classList.toggle('navbar-active');
        //document.querySelector(body).style.overflowY = 'hidden';
    });

    const navLinks = Array.from(document.querySelectorAll('.site-link'));
    
    navLinks.forEach(element => {
        element.addEventListener('click', () => {
            burger.classList.toggle('is-active');
            nav.classList.toggle('navbar-active');
        });
    });

}
navSlide();