import { navbar } from '$utils/navbar';
import { nestedCollection } from '$utils/nestedCollection';
import { globalSwiper } from '$utils/swiper';

window.Webflow ||= [];
window.Webflow.push(() => {
  nestedCollection();
  globalSwiper();
  navbar();
});
