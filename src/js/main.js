import './utils/vh.utils.js';
import './utils/animate-on-view.utils'

import './components/uploadFile.component.js';
import './components/inputs.component.js';

import './libs/countUp.lib.js';

import Swiper, {Navigation, Scrollbar} from 'swiper';

const swiper = new Swiper(".swiper", {
  slidesPerView: 3,
  spaceBetween: 16,
  modules: [Navigation, Scrollbar],
  scrollbar: {
    el: ".swiper-scrollbar",
  },
  navigation: {
    nextEl: ".swipe-button-next",
    prevEl: ".swipe-button-previous",
  },
});