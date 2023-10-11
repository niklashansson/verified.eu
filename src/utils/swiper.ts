import 'swiper/css';

import { Swiper } from 'swiper';
import { Controller, EffectFade, Navigation, Pagination } from 'swiper/modules';

export const globalSwiper = function () {
  const components = [...document.querySelectorAll('[swiper="component"]')];
  if (components.length === 0) return;

  // Make each instance unique
  const swiperInstances = components.map((component, i) => {
    const element = component.querySelector('.swiper');
    if (!element) return;
    element.classList.add(`is-swiper-${i + 1}`);

    // Used for selecting which options to apply
    const optionsNmbr = component.getAttribute('swiper-options');

    // Will contain bullets
    const bulletClass = component.querySelector('[swiper="bullet-class"]')?.className;
    const bulletList = component.querySelector('[swiper="bullet-list"]');
    const bulletValues = Array.from(
      component.querySelectorAll('[swiper-pagination-element="value"]')
    ).map((value) => value.textContent);

    // Get text for bullet/tab links
    const slides = Array.from(component.querySelectorAll('.swiper-slide'));
    // const bulletValues = slides.map((slide) => slide.getAttribute('swiper-bullet-value'));

    // Gets author image for option group 2 bullets
    const bulletElements = slides.map((slide) => {
      const imgElement = slide.querySelector('img');
      return imgElement?.outerHTML;
    });

    // Navigation elements
    const prevEl = component.querySelector('[swiper="arrow-prev"]');
    const nextEl = component.querySelector('[swiper="arrow-next"]');

    const instance = {
      component: component,
      element: element,
      optionsNmbr: optionsNmbr,
      bulletClass: bulletClass,
      bulletList: bulletList,
      bulletValues: bulletValues,
      bulletElements: bulletElements,
      prevEl: prevEl,
      nextEl: nextEl,
    };

    return instance;
  });

  // Create swiper
  swiperInstances.forEach(
    ({
      element,
      optionsNmbr,
      bulletClass,
      bulletList,
      bulletValues,
      bulletElements,
      prevEl,
      nextEl,
    }) => {
      if (!element) return;
      if (!optionsNmbr) console.error('Missing options number');

      let options;

      if (+optionsNmbr === 1)
        options = optionGroup1(bulletList, bulletClass, 'is-active', bulletValues);

      if (+optionsNmbr === 2)
        options = optionGroup2(
          bulletList,
          bulletClass,
          'is-active',
          bulletElements,
          prevEl,
          nextEl
        );

      if (+optionsNmbr === 3)
        options = optionGroup3(bulletList, bulletClass, 'is-active', bulletValues, prevEl, nextEl);

      // const options = optionGroups[optionGroup](bulletList, bulletClass, 'is-active', bulletValues);

      const swiper = new Swiper(element, options);
    }
  );
};

function optionGroup1(
  bulletList: Element,
  bulletClass: string,
  bulletActiveClass: string,
  bulletValues: Array<string>
) {
  if (!bulletList) return;
  if (!bulletClass) return;
  if (!bulletActiveClass) return;
  if (!bulletValues) return;

  return {
    modules: [Pagination, Controller, EffectFade],
    speed: 0,
    // crossFade: true,
    // effect: 'fade',
    spaceBetween: 24,
    slidesPerView: 2,
    pagination: {
      el: bulletList,
      clickable: true,
      bulletClass: bulletClass,
      bulletActiveClass: bulletActiveClass,
      renderBullet: function (index: number, className: string) {
        return `<div class="${className}" role="listitem">${bulletValues[index]}</div>`;
      },
    },
    breakpoints: {
      // when window width is >= 320px
      320: {
        slidesPerView: 1,
        spaceBetween: 0,
      },
      // when window width is >= 480px
      768: {
        slidesPerView: 1,
        spaceBetween: 0,
      },
      // when window width is >= 992px
      992: {
        slidesPerView: 1,
        spaceBetween: 0,
      },
    },
  };
}

function optionGroup2(
  bulletList: Element,
  bulletClass: string,
  bulletActiveClass: string,
  bulletElements: string,
  prevEl: Element,
  nextEl: Element
) {
  if (!bulletList) return;
  if (!bulletClass) return;
  if (!bulletActiveClass) return;
  if (!bulletElements) return;

  return {
    modules: [Pagination, Controller, Navigation],
    speed: 800,
    spaceBetween: 24,
    slidesPerView: 2,
    pagination: {
      el: bulletList,
      clickable: true,
      bulletClass: bulletClass,
      bulletActiveClass: bulletActiveClass,
      renderBullet: function (index: number, className: string) {
        return `<div class="${className}" role="listitem">${bulletElements[index]}</div>`;
      },
    },
    navigation: {
      prevEl: prevEl,
      nextEl: nextEl,
    },
    breakpoints: {
      // when window width is >= 320px
      320: {
        slidesPerView: 1,
        spaceBetween: 0,
      },
      // when window width is >= 480px
      768: {
        slidesPerView: 1,
        spaceBetween: 0,
      },
      // when window width is >= 992px
      992: {
        slidesPerView: 1,
        spaceBetween: 0,
      },
    },
  };
}

function optionGroup3(
  bulletList: Element,
  bulletClass: string,
  bulletActiveClass: string,
  bulletValues: string,
  prevEl: Element,
  nextEl: Element
) {
  if (!bulletList) return;
  if (!bulletClass) return;
  if (!bulletActiveClass) return;
  if (!bulletValues) return;

  return {
    modules: [Pagination, Controller, Navigation],
    speed: 800,
    spaceBetween: 24,
    slidesPerView: 2,
    pagination: {
      el: bulletList,
      clickable: true,
      bulletClass: bulletClass,
      bulletActiveClass: bulletActiveClass,
      renderBullet: function (index: number, className: string) {
        return `<div class="${className}" role="listitem">${bulletValues[index]}</div>`;
      },
    },
    navigation: {
      prevEl: prevEl,
      nextEl: nextEl,
    },
    breakpoints: {
      // when window width is >= 320px
      320: {
        slidesPerView: 1,
        spaceBetween: 0,
      },
      // when window width is >= 480px
      768: {
        slidesPerView: 1,
        spaceBetween: 0,
      },
      // when window width is >= 992px
      992: {
        slidesPerView: 1,
        spaceBetween: 0,
      },
    },
  };
}
