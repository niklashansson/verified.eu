import { demoModal } from '$utils/demoModal';
import { fetchItems } from '$utils/fetchItems';
import { navbar } from '$utils/navbar';
import { resources } from '$utils/resources';
import { globalSwiper } from '$utils/swiper';

window.Webflow ||= [];
window.Webflow.push(() => {
  demoModal();
  fetchItems();
  globalSwiper();
  navbar();
  resources();
});

/* <script defer src="https://cdn.jsdelivr.net/gh/niklashansson/verified.eu@1eaad8a35aa8f93e63fe48cf0aa3ba8936ebc1b9/dist/index.min.js"></script> */
