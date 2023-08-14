import { navbar } from '$utils/navbar';
import { nestedCollection } from '$utils/nestedCollection';
import { globalSwiper } from '$utils/swiper';

window.Webflow ||= [];
window.Webflow.push(() => {
  nestedCollection();
  globalSwiper();
  navbar();
});

/* <script defer src="https://cdn.jsdelivr.net/gh/niklashansson/verified.eu@7506ddbcb1f67f95ef08d6d28774aeec70604217/dist/index.min.js"></script> */
