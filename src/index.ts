import { fetchItems } from '$utils/fetchItems';
import { fetchResources } from '$utils/fetchResources';
import { setFormMarkets } from '$utils/formMarkets';
import { localization } from '$utils/localization';
import { navbar } from '$utils/navbar/navbar';
import { sortResources } from '$utils/sortResources';
import { globalSwiper } from '$utils/swiper';
import { videojsConfig } from '$utils/videojs';

window.Webflow ||= [];
window.Webflow.push(() => {
  videojsConfig();
  localization();
  setFormMarkets();
  fetchItems();
  globalSwiper();
  navbar();
  sortResources();
  fetchResources();
});

/* <script defer src="https://cdn.jsdelivr.net/gh/niklashansson/verified.eu@69d786eda83b914f3609e8baf97bebe0f86c0170/dist/index.min.js"></script> */

/* <link href="https://cdn.jsdelivr.net/gh/niklashansson/verified.eu@f8d87c705165f89e95bf000bfbe38073c5e97b87/dist/index.css" rel="stylesheet" type="text/css"/> */
