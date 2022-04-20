'use strict';

function mainSlider () {
  let mySwiper = '';
  let breakpoint = window.matchMedia('(max-width: 767px)');
  let breakpointChecker = function () {
    if (breakpoint.matches) {
      if (mySwiper) {
        mySwiper.destroy(true, true);
      }

      mySwiper = new Swiper('.main-screen__slider', {
        spaceBetween: 10,
        pagination: {
          el: '.main-screen__slider-pagination',
          type: 'fraction',
        },

        scrollbar: {
          el: '.main-screen__slider-scrollbar',
        },
      });
      return;
    } else {
      if (mySwiper) {
        mySwiper.destroy(true, true);
      }

      mySwiper = new Swiper('.main-screen__slider', {
        pagination: {
          el: '.main-screen__slider-pagination',
          type: 'bullets',
          clickable: true,
          renderBullet: function (index, className) {
            return '<span class="' + className + '">' + '0' + (index + 1) + '</span>';
          },
        },
      });
    }
  };
  breakpoint.addListener(breakpointChecker);
  breakpointChecker();
};

mainSlider();



// annotathion slyder

const swiper =  new Swiper('.annotation-wrapper', {
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
  },
  loop: true,
  slidersPerView: 1,
});

// last chance slyder

function lastSlider () {
  let lastSwiper = '';
  let breakpoint = window.matchMedia('(max-width: 1110px)');
  let breakpointChecker = function () {
    if (breakpoint.matches) {
      if (lastSwiper) {
        lastSwiper.destroy(true, true);
      }

      lastSwiper = new Swiper('.last_slyder', {
        spaceBetween: 0,
        pagination: {
          el: '.main-screen__slider-pagination',
          type: 'fraction',
        },
        scrollbar: {
          el: '.main-screen__slider-scrollbar',
        },
      });
      return;
    } else {
      if (lastSwiper) {
        lastSwiper.destroy(true, true);
      }
    }
  };
  breakpoint.addListener(breakpointChecker);
  breakpointChecker();
};

lastSlider();

// burger

const toggleBtn = document.querySelector('.site-nav__button');
const sidebar = document.querySelector('.site-nav');


toggleBtn.addEventListener("click", function() {
    sidebar.classList.toggle("site-nav--closed");
})