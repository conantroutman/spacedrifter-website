import _, { forEach } from 'lodash';

import './style/variables.scss';
import './style/main.scss';
import './style/animations.scss';
import './style/navbar.scss';
import './style/hero.scss';
import './style/music.scss';
import './style/bio.scss';
import './style/contact.scss';
import './style/footer.scss';
import '@fortawesome/fontawesome-free/css/all.css';

import Background from './images/Background.jpg';
import pfpJohn from './images/pfp_john.jpg';
import pfpAdam from './images/pfp_adam.jpg';

import { contactform } from './js/contactform';
import { getSpotifyReleases } from './js/spotify';
import { navigation } from './js/navigation';
import { setScrollReveal } from './js/animation';

import Rellax from 'rellax';
import SmoothScroll from 'smooth-scroll'
import ScrollReveal from 'scrollreveal'

const rellax = new Rellax('.rellax');
const scroll = new SmoothScroll('a[href*="#"]');

getSpotifyReleases(ScrollReveal)

setScrollReveal(document.querySelectorAll('.release'), true);
setScrollReveal(document.querySelectorAll('.section-text'), false);
setScrollReveal(document.querySelectorAll('.member'), true);
setScrollReveal(document.querySelectorAll('.contact-grid-item'), true);