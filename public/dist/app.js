/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/assets/js/twilight.js":
/*!***********************************!*\
  !*** ./src/assets/js/twilight.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _salla_sa_twilight___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @salla.sa/twilight */ "./node_modules/@salla.sa/twilight/src/twilight.js");

const twilight = new _salla_sa_twilight___WEBPACK_IMPORTED_MODULE_0__["default"]();
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (twilight);

/***/ }),

/***/ "./src/assets/styles/app.scss":
/*!************************************!*\
  !*** ./src/assets/styles/app.scss ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./node_modules/lite-youtube-embed/src/lite-yt-embed.js":
/*!**************************************************************!*\
  !*** ./node_modules/lite-youtube-embed/src/lite-yt-embed.js ***!
  \**************************************************************/
/***/ (() => {

/**
 * A lightweight youtube embed. Still should feel like watching an embedded video.
 *
 * IFrame lazy loading: https://web.dev/lazy-loading-video/
 *
 * @author Alex Grande <hello@alexgrande.dev>
 *
 * @license MIT
 */
class LiteYTEmbed extends HTMLElement {
  connectedCallback() {
    this.videoId = this.getAttribute('videoid');
    let playLabel = this.getAttribute('playlabel') || 'Play';
    this.playLabel = playLabel;
    /**
     * Lo, the youtube placeholder image!  (aka the thumbnail, poster image, etc)
     * There is much more nuance to this than I thought. A lot of sellers are listing their products with resolutions of 1280x720, so I think this is a good starting point.
     * The list of supported resolutions: https://developers.google.com/youtube/v3/docs/thumbnails#properties
     * Something else to consider is that youtube will often serve webp images, which are smaller than jpgs.
     */
    this.posterUrl = `https://i.ytimg.com/vi/${this.videoId}/hqdefault.jpg`; // also webp available
    // add webp support.
    this.posterUrl = this.posterUrl.replace('jpg', 'webp');
    this.innerHTML = this.constructor.buildHTML(this.posterUrl, playLabel);
    this.addEventListener('pointerover', LiteYTEmbed.warmConnections, {
      once: true
    });
    this.addEventListener('click', e => this.addIframe());
  }

  // TODO: allow lazy loading.
  // static preconnected = false;

  static buildHTML(posterUrl, playLabel) {
    return `
    <a class="lty-playbtn" href="https://www.youtube.com/watch?v=${this.videoId}">
      <span class="lyt-visually-hidden">${playLabel}</span>
    </a>
    `;
  }

  /**
   * Warm up the connections to the server.
   * It's cheaper to do this when the user is hovering over the video..
   */
  static warmConnections() {
    if (LiteYTEmbed.preconnected) return;

    // The iframe's srcdoc needs a styles link, so we're going to create one here.
    const s = document.createElement('style');
    //s.textContent = IFrameStyles;
    //document.head.append(s);

    // TODO: allow lazy loading.
    // LiteYTEmbed.preconnected = true;
  }
  addIframe() {
    const iframeHTML = `
<iframe width="560" height="315" frameborder="0"
  allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen
  src="https://www.youtube.com/embed/${this.videoId}?autoplay=1"
></iframe>`;
    this.insertAdjacentHTML('beforeend', iframeHTML);
    this.classList.add('lyt-activated');
  }
}
// Register the element.
customElements.define('lite-youtube', LiteYTEmbed);

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"app": 0,
/******/ 			"assets/styles/app": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(() => {
"use strict";
/*!*******************************!*\
  !*** ./src/assets/js/app.js ***!
  \*******************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _styles_app_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../styles/app.scss */ "./src/assets/styles/app.scss");
/* harmony import */ var lite_youtube_embed_src_lite_yt_embed_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lite-youtube-embed/src/lite-yt-embed.js */ "./node_modules/lite-youtube-embed/src/lite-yt-embed.js");
/* harmony import */ var lite_youtube_embed_src_lite_yt_embed_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lite_youtube_embed_src_lite_yt_embed_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _twilight__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./twilight */ "./src/assets/js/twilight.js");
// Salla Twilight | Built for a great developer experience.
// Salla provides this file to help you get started quickly.

// todo: the path is not correct, s-helpers should be imported from twilight node_modules

_twilight__WEBPACK_IMPORTED_MODULE_2__["default"].onReady(function () {
  // todo: all events are not supported yet, just for testing.
  _twilight__WEBPACK_IMPORTED_MODULE_2__["default"].event.on('product-card::updated', res => console.log('product-card::updated', res));
  _twilight__WEBPACK_IMPORTED_MODULE_2__["default"].event.on('product-card::-added-to-cart', res => console.log('product-card::-added-to-cart', res));
  _twilight__WEBPACK_IMPORTED_MODULE_2__["default"].event.on('salla-filters::updated', res => console.log('salla-filters::updated', res));
});
})();

/******/ })()
;
