import Swiper from 'swiper/bundle';
import 'swiper/css/bundle';

let pricingSwiper = null;

function initPricingSwiper() {
  const breakpoint = 1200;
  const isMobile = window.innerWidth < breakpoint;

  if (isMobile && !pricingSwiper) {
    const prevSlide = document.querySelector('.pricing-btn-left');
    const nextSlide = document.querySelector('.pricing-btn-right');
    pricingSwiper = new Swiper('.pricing-swiper', {
      slidesPerView: 'auto',
      centeredSlides: true,
      spaceBetween: 20,
      mousewheel: true,
      breakpoints: {
        1200: {
          spaceBetween: 200,
        },
      },

      pagination: {
        el: '.pricing-pagination',
        clickable: true,
      },

      navigation: {
        nextEl: '.pricing-btn-right',
        prevEl: '.pricing-btn-left',
      },
    });
  }

  if (!isMobile && pricingSwiper) {
    pricingSwiper.destroy(true, true);
    pricingSwiper = null;
  }
}

window.addEventListener('load', initPricingSwiper);
