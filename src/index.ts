import { navbar } from '$utils/navbar';
import { nestedCollection } from '$utils/nestedCollection';
import { globalSwiper } from '$utils/swiper';

window.Webflow ||= [];
window.Webflow.push(() => {
  nestedCollection();
  globalSwiper();
  navbar();
});

// <script defer src="https://cdn.jsdelivr.net/gh/niklashansson/verified.eu@b295932a1f23133b90987ce3eb9f0a44d902cbc2/dist/index.js"></script>
