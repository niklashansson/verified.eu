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
    const instanceOptions = el.dataset;

    const options = {
      speed: instanceOptions.speed || 800,
      loop: instanceOptions.loop || false,
      grabCursor: instanceOptions.grabcursor || false,
      spaceBetween: instanceOptions.spacebetween || 24,
      centeredSlides: instanceOptions.centeredslides || false,
    };

    // Use autoplay
    if (instanceOptions.autoplay) {
      options;
      (options.modules = [Autoplay]),
        (options.autoplay = {
          delay: instanceOptions.autoplayDelay,
        });
    }

    const swiper = new Swiper(el, options);
  }
};
