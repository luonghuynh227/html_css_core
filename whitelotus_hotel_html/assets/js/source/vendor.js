// @prepros-prepend ../../vendor/smoothscroll-for-websites/SmoothScroll.js
// @prepros-prepend ../../vendor/bootstrap-sass/assets/javascripts/bootstrap/transition.js
// @prepros-prepend ../../vendor/bootstrap-sass/assets/javascripts/bootstrap/dropdown.js
// @prepros-prepend ../../vendor/bootstrap-sass/assets/javascripts/bootstrap/tab.js
// @prepros-prepend ../../vendor/bootstrap-sass/assets/javascripts/bootstrap/modal.js
// @prepros-prepend ../../vendor/OwlCarousel2-2.3.4/dist/owl.carousel.js
// @prepros-prepend ../../vendor/bootstrap-datetimepicker-master/js/bootstrap-datetimepicker.js
// @prepros-prepend ../../vendor/jquery.lazy-master/jquery.lazy.js
// @prepros-prepend ../../vendor/fancybox-master/dist/jquery.fancybox.js
// @prepros-prepend ../../vendor/skrollr-master/dist/skrollr.min.js

(function() {
  'use strict';
  var msViewportStyle;
  if (navigator.userAgent.match(/IEMobile\/10\.0/)) {
    msViewportStyle = document.createElement('style');
    msViewportStyle.appendChild(document.createTextNode('@-ms-viewport{width:auto!important}'));
    document.head.appendChild(msViewportStyle);
  }
})();

SmoothScroll();