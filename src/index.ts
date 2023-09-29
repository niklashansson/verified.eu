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

/* <script defer src="https://cdn.jsdelivr.net/gh/niklashansson/verified.eu@0a9434bc0372b28a10a874838095fb715d639708/dist/index.min.js"></script> */
