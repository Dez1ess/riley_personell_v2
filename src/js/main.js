import './utils/vh.utils.js';
import './utils/animate-on-view.utils'

import './components/uploadFile.component.js';
import './components/inputs.component.js';

import './libs/countUp.lib.js';

import Swiper, {Navigation, Scrollbar} from 'swiper';

export const sectorsSwiper = new Swiper(".swiper", {
  slidesPerView: 3,
  slidesOffsetAfter: 85,
  spaceBetween: 16,
  loop: true,
  slideActiveClass: "swiper-slide-active",
  slideBlankClass: "swiper-slide-blank",
  slideToClickedSlide: true,
  slidesOffsetBefore: 0,
  breakpoints: {
    320: {
      slidesPerView: 1.1,
      spaceBetween: 16,
    },
    768: {
      slidesPerView: 2,
      spaceBetween: 16,
    },
    1280: {
      slidesPerView: 3,
      spaceBetween: 16,
    },
  },
  modules: [Navigation, Scrollbar],
  scrollbar: {
    el: ".swiper-scrollbar",
  },
  navigation: {
    nextEl: ".sectors__swipe-button-next",
    prevEl: ".sectors__swipe-button-prev",
  },
});