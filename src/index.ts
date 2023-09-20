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

/* <script defer src="https://cdn.jsdelivr.net/gh/niklashansson/verified.eu@745ff83d23277f217ccd61c3c87096f286655d87/dist/index.min.js"></script> */
