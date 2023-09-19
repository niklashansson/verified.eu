import { fetchItems } from '$utils/fetchItems';
import { navbar } from '$utils/navbar';
import { resources } from '$utils/resources';
import { globalSwiper } from '$utils/swiper';

window.Webflow ||= [];
window.Webflow.push(() => {
  fetchItems();
  globalSwiper();
  navbar();
  resources();
});

/* <script defer src="https://cdn.jsdelivr.net/gh/niklashansson/verified.eu@9d6e1a0be9de38446d811abd556044f93b92738f/dist/index.min.js"></script> */
