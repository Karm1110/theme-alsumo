/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
var __webpack_exports__ = {};
/*!*********************************!*\
  !*** ./src/assets/js/home.js ***!
  \*********************************/


salla.document.lazy('.s-block-testimonials .swiper', {
  on: {
    init: function () {
      salla.document.removeClassWhen('.s-block-testimonials .swiper', 's-skeleton-cards-animated');
    }
  }
});
salla.event.on('salla-slider-ready', (response, slider) => {
  if (slider.element.id === 'enhanced-slider-186b3f4f-25cf-4d3c-abca-cef7eed6f0ab') {
    anime({
      targets: '#'.concat(slider.element.id, ' .anime-in-start'),
      translateY: [30, 0],
      opacity: [0, 1],
      delay: anime.stagger(200, {
        start: 300
      })
    });
    slider.on('slideChange', () => {
      let currentSlide = slider.slides[slider.activeIndex];
      anime.set(currentSlide.querySelectorAll('.anime-in-start'), {
        opacity: 0,
        translateY: 30
      });
      anime({
        targets: currentSlide.querySelectorAll('.anime-in-start'),
        translateY: [30, 0],
        opacity: [0, 1],
        delay: anime.stagger(200, {
          start: 300
        })
      });
    });
  }
});
/******/ })()
;
