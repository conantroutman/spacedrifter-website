const navSlide = () => {
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.navbar');

    burger.addEventListener('click', () => {
        burger.classList.toggle('is-active');
        nav.classList.toggle('navbar-active');
        document.querySelector(body).style.overflowY = 'hidden';
    });
}
navSlide();