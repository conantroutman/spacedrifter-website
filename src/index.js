import _ from 'lodash';

import './style/main.css';
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

const rellax = new Rellax('.rellax');
const scroll = new SmoothScroll('a[href*="#"]');