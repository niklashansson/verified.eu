import Player from '@vimeo/player';

export const vimeoPlayer = function () {
  const components = Array.from(document.querySelectorAll('[js-vimeo-element="component"]'));
  if (!components) return;

  const colors = ['#082854', '#84F088'];

  components.forEach(async (component) => {
    const iframe = component.querySelector('iframe');
    const cover = component.querySelector('[js-vimeo-element="cover"]');
    const durationEl = component.querySelector('[js-vimeo-element="duration"]');

    // create player
    const player = new Player(iframe);

    // set global player colors
    player.setColors(colors);

    // setduration on duration element if exist
    const duration = new Date(0);
    duration.setSeconds(await player.getDuration());
    const durationStr = duration.toISOString().substring(11, 19).slice(3);

    if (durationEl) durationEl.textContent = `${durationStr}`;

    player.on('play', function () {
      // pause previously playing component before playing new one
      const playingCover = document
        .querySelector('[js-vimeo-element="component"].is-playing')
        ?.querySelector('[js-vimeo-element="cover"]');

      if (playingCover) playingCover.click();

      player.setVolume(0.4);

      component.classList.add('is-playing');
    });

    player.on('pause', function () {
      component.classList.remove('is-playing');
    });

    // when user clicks on our cover
    cover?.addEventListener('click', function () {
      component.classList.contains('is-playing') ? player.pause() : player.play();
    });
  });
};
