import _, { forEach } from 'lodash';

import './style/main.scss';
import '@fortawesome/fontawesome-free/css/all.css';

import Background from './images/Background.jpg';
import Epbild from './images/Epbild 1.jpg';
import pfpJohn from './images/pfp_john.jpg';
import pfpAdam from './images/pfp_adam.jpg';

import { contactform } from './js/contactform';
import { spotify } from './js/spotify';
import { navigation } from './js/navigation';

import Rellax from 'rellax';
import SmoothScroll from 'smooth-scroll'
import ScrollReveal from 'scrollreveal'

const rellax = new Rellax('.rellax');
const scroll = new SmoothScroll('a[href*="#"]');
ScrollReveal({ reset: true });

ScrollReveal().reveal('.release', { 
    distance: '50px',
    easing: 'ease-in'
});

ScrollReveal().reveal('.contact-grid', { 
    distance: '50px',
    easing: 'ease-in'
});

const setScrollReveal = (element) => {
    const delayOffset = 200;
    const elementList = Array.from(document.querySelectorAll(element));
    elementList.forEach((item, index) => {
        ScrollReveal().reveal(item, {
            delay: delayOffset * (index - 1),
            distance: '50px',
            easing: 'ease-in'
        });
    })
}

setScrollReveal('.member');