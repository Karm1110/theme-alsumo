/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
var __webpack_exports__ = {};
/*!***********************************!*\
  !*** ./src/assets/js/product.js ***!
  \***********************************/


salla.event.on('product-details.end-render', data => {
  if (salla.config.get('theme.settings.imageZoom', false)) {
    salla.product.imageZoom();
  }
});
salla.product.event.onPriceUpdated(res => {
  let price = salla.money(res.data.price);
  document.querySelectorAll('.total-price').forEach(el => el.innerText = price);
});
salla.product.event.onVariantSelected(res => {
  if (!res.data.variant) {
    return;
  }
  let isAvailable = res.data.variant.is_available;
  document.querySelectorAll('.btn--add-to-cart').forEach(btn => {
    salla.lang.get('pages.products.add_to_cart');
    if (!isAvailable) {
      btn.innerHTML = salla.lang.get('pages.products.out_of_stock');
      salla.helpers.disable(btn);
      return;
    }
    btn.innerHTML = salla.lang.get('pages.products.add_to_cart');
    salla.helpers.enable(btn);
  });
});
/******/ })()
;
