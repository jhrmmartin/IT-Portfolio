/* Shared theme preference for the Next.js site and static portfolio. */
(() => {
  const key = 'jehrome_editorial_theme';
  const root = document.documentElement;
  let theme = 'dark';
  try {
    const saved = localStorage.getItem(key);
    if (saved === 'light' || saved === 'dark') theme = saved;
  } catch { /* Theme switching also works when storage is unavailable. */ }
  root.dataset.colorTheme = theme;


  function updateVideo() {
    const video = document.getElementById('hero-video');
    if (!video) return;
    const source = root.dataset.colorTheme === 'light' ? video.dataset.lightVideo : video.dataset.darkVideo;
    video.muted = true;
    video.removeAttribute('poster');
    if (video.getAttribute('src') !== source) {
      video.src = source;
      video.load();
    }
    video.play().catch(() => {});
  }

  function initializeTheme() {
    updateVideo();
    requestAnimationFrame(() => {
      root.dataset.themeReady = 'true';
    });
  }
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', initializeTheme, { once: true });
  else initializeTheme();

  document.addEventListener('click', (event) => {
    if (!(event.target instanceof Element) || !event.target.closest('[data-theme-toggle]')) return;
    const nextTheme = root.dataset.colorTheme === 'light' ? 'dark' : 'light';
    root.dataset.colorTheme = nextTheme;
    updateVideo();
    try { localStorage.setItem(key, nextTheme); } catch { /* Keep the current session preference. */ }
  });
})();
