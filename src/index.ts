import { demoModal } from '$utils/demoModal';
import { fetchItems } from '$utils/fetchItems';
import { fetchResources } from '$utils/fetchResources';
import { navbar } from '$utils/navbar';
import { sortResources } from '$utils/sortResources';
import { globalSwiper } from '$utils/swiper';

window.Webflow ||= [];
window.Webflow.push(() => {
  demoModal();
  fetchItems();
  globalSwiper();
  navbar();
  sortResources();
  fetchResources();
});

/* <script defer src="https://cdn.jsdelivr.net/gh/niklashansson/verified.eu@44a89c2d192094111c5acd38f180a8a8fda6bc97/dist/index.min.js"></script> */
