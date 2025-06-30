import Swiper from 'swiper/bundle';
import 'swiper/css/bundle';

let ourHelpSwiper = null;

function initOurHelpSwiper() {
  const breakpoint = 1200;
  const isMobile = window.innerWidth < breakpoint;

  if (isMobile && !ourHelpSwiper) {
    const prevSlide = document.querySelector('.oh-button-left');
    const nextSlide = document.querySelector('.oh-button-right');

    ourHelpSwiper = new Swiper('.oh-swiper', {
      slidesPerView: 'auto',
      centeredSlides: true,
      spaceBetween: 40,
      mousewheel: true,
      loop: true,
      navigation: {
        nextEl: '.oh-button-right',
        prevEl: '.oh-button-left',
      },
    });
  }

  if (!isMobile && ourHelpSwiper) {
    ourHelpSwiper.destroy(true, true);
    ourHelpSwiper = null;
  }
}

window.addEventListener('load', initOurHelpSwiper);
window.addEventListener('resize', initOurHelpSwiper);
