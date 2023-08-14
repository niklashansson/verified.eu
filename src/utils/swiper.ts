import 'swiper/css';

import { Swiper } from 'swiper';
import { Autoplay } from 'swiper/modules';

export const globalSwiper = function () {
  const listElements = Array.from(document.querySelectorAll('.swiper'));

  if (listElements.length === 0) return;

  // Make each instance unique
  const swiperInstances = listElements.map((el, i) => {
    el.classList.add(`is-swiper-${i + 1}`);
    return el;
  });

  // Create swiper
  swiperInstances.forEach((instance) => {
    newSwiper(instance);
  });

  function newSwiper(el) {
    const options = el.getAttribute('swiper-options');

    console.log(options);

    const optionVariants = [
      {
        speed: 800,
        loop: false,
        grabCursor: true,
        spaceBetween: 128,
        centeredSlides: false,
        slidesPerView: 1.5,
      },
    ];

    const swiper = new Swiper(el, optionVariants[options - 1]);
  }
};
