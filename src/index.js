import _ from 'lodash';

import './style/main.css';
import '@fortawesome/fontawesome-free/css/all.css';

import './images/Background.jpg';
import './images/Epbild 1.jpg';
import './images/pfp_adam.jpg';
import './images/pfp_john.jpg';

import { contactform } from './js/contactform';
import { spotify } from './js/spotify';

import Rellax from 'rellax';
import SmoothScroll from 'smooth-scroll'

const rellax = new Rellax('.rellax');
const scroll = new SmoothScroll('a[href*="#"]');

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