import Swiper from 'swiper/bundle';
import 'swiper/css/bundle';

let platformsSwiper = null;

function initPlatformsSwiper() {
    platformsSwiper = new Swiper('.platforms-swiper', {
      spaceBetween: 30,
      slidesPerView: 3,
      initialSlide: 1,
      loop: true,
      mousewheel: true,
      centeredSlides: true,
      breakpoints: {
        1200: {
          slidesPerView: 5,
          spaceBetween: 50,
          centeredSlides: true,
        }
      },
    });
}

window.addEventListener('load', initPlatformsSwiper);
