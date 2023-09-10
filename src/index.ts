import { navbar } from '$utils/navbar';
import { navbar2 } from '$utils/navbar2';
import { nestedCollection } from '$utils/nestedCollection';
import { globalSwiper } from '$utils/swiper';

window.Webflow ||= [];
window.Webflow.push(() => {
  globalSwiper();
  navbar2();
});

/* <script defer src="https://cdn.jsdelivr.net/gh/niklashansson/verified.eu@9d6e1a0be9de38446d811abd556044f93b92738f/dist/index.min.js"></script> */
