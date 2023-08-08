import { navbar } from '$utils/navbar';
import { nestedCollection } from '$utils/nestedCollection';
import { globalSwiper } from '$utils/swiper';

window.Webflow ||= [];
window.Webflow.push(() => {
  nestedCollection();
  globalSwiper();
  navbar();
});

// <script defer src="https://cdn.jsdelivr.net/gh/niklashansson/verified.eu@8b7936c0787392cfcf350be3b24e51003227d946/dist/index.js"></script>
