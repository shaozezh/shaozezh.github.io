const videoLink = document.getElementById('play-chatmuse');
if (videoLink) {
  videoLink.addEventListener('click', event => {
    // Local files have no HTTP referrer; their ordinary link opens YouTube.
    if (window.location.protocol === 'file:') return;
    event.preventDefault();
    const player = document.createElement('iframe');
    player.src = 'https://www.youtube-nocookie.com/embed/IMoYRhvsHsI?autoplay=1&rel=0';
    player.title = 'ChatMuse — UIST 2026 teaser video';
    player.allow = 'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share';
    player.allowFullscreen = true;
    player.referrerPolicy = 'strict-origin-when-cross-origin';
    document.getElementById('video-frame').replaceChildren(player);
    player.focus();
  });
}

const menu = document.querySelector('.mobile-menu');
document.addEventListener('keydown', event => {
  if (event.key === 'Escape' && menu?.open) {
    menu.open = false;
    menu.querySelector('summary').focus();
  }
});
document.addEventListener('click', event => {
  if (menu?.open && !menu.contains(event.target)) menu.open = false;
});
