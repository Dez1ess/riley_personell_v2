import './utils/vh.utils.js';
import './utils/animate-on-view.utils';
import './components/uploadFile.component.js';
import './components/inputs.component.js';
import './libs/countUp.lib.js';
import Swiper, { Navigation, Scrollbar } from 'swiper';

export const sectorsSwiper = new Swiper(".swiper", {
  slidesPerView: 3,
  spaceBetween: 16,
  loop: true,
  slideActiveClass: "swiper-slide-active",
  slideBlankClass: "swiper-slide-blank",
  slideToClickedSlide: true,
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

/* BURGER MENU LINK COLLAPSE */
document.addEventListener('DOMContentLoaded', function() {
  const advancedLink = document.querySelector('.burger-menu__link-advanced__title');
  const advancedContent = document.querySelector('.burger-menu__link-advanced__content');
  const burger = document.querySelector('.burger');
  const burgerMenu = document.querySelector('.burger-menu');
  const closeButton = document.querySelector('.burger-menu__close');

  // Function to open the burger menu
  function openBurgerMenu() {
    burgerMenu.classList.add('open');
  }

  // Function to close the burger menu
  function closeBurgerMenu() {
    burgerMenu.classList.remove('open');
  }

  burger.addEventListener('click', openBurgerMenu);
  closeButton.addEventListener('click', closeBurgerMenu);
  advancedLink.addEventListener('click', function() {
    advancedLink.classList.toggle('expanded');
    advancedContent.classList.toggle('expanded');
  });

  // Call the handleResize function initially
  handleResize();
});

window.addEventListener('resize', handleResize);

function handleResize() {
  const slides = document.querySelectorAll('.swiper-slide');
  const activeSlide = document.querySelector('.swiper-slide-active');

  if (slides.length > 0 && activeSlide !== null) {
    if (window.innerWidth < 768) {
      // Mobile viewport
      slides.forEach(slide => {
        slide.classList.add('swiper-slide-mobile-active');
      });
      activeSlide.classList.remove('swiper-slide-active');
    } else {
      // Desktop viewport
      slides.forEach(slide => {
        slide.classList.remove('swiper-slide-mobile-active');
      });
      activeSlide.classList.add('swiper-slide-active');
    }
  }
}