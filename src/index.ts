import { demoModal } from '$utils/demoModal';
import { fetchItems } from '$utils/fetchItems';
import { fetchResources } from '$utils/fetchResources';
import { navbar } from '$utils/navbar';
import { sortResources } from '$utils/sortResources';
import { globalSwiper } from '$utils/swiper';
import { vimeoPlayer } from '$utils/vimeoPlayer';
import { weglot } from '$utils/weglot';

window.Webflow ||= [];
window.Webflow.push(() => {
  weglot();
  demoModal();
  fetchItems();
  globalSwiper();
  navbar();
  sortResources();
  fetchResources();
  vimeoPlayer();
});

/* <script defer src="https://cdn.jsdelivr.net/gh/niklashansson/verified.eu@39b6dad6b5693e691ccb987e913af2935f60921a/dist/index.min.js"></script> */
