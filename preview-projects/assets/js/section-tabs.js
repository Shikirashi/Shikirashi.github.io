/* In-place Projects/Games view switch. No navigation, URL hashes, or page reloads. */
(function () {
  "use strict";
  function init() {
    const tabs = Array.from(document.querySelectorAll('.filters [data-section]'));
    const panels = {
      projects: document.getElementById('projects-panel'),
      games: document.getElementById('games-panel')
    };
    if (tabs.length !== 2 || !panels.projects || !panels.games) return;

    function selectSection(section) {
      if (section !== 'projects' && section !== 'games') return;
      panels.projects.hidden = section !== 'projects';
      panels.games.hidden = section !== 'games';

      tabs.forEach(function (tab) {
        const isCurrent = tab.dataset.section === section;
        tab.classList.toggle('active', isCurrent);
        tab.setAttribute('aria-selected', String(isCurrent));
        tab.tabIndex = isCurrent ? 0 : -1;
      });

      if (window.AOS && typeof window.AOS.refresh === 'function') {
        window.requestAnimationFrame(function () { window.AOS.refresh(); });
      }
    }

    tabs.forEach(function (tab, index) {
      tab.addEventListener('click', function (event) {
        event.preventDefault();
        selectSection(tab.dataset.section);
      });
      tab.addEventListener('keydown', function (event) {
        let next = null;
        if (event.key === 'Home') next = 0;
        else if (event.key === 'End') next = tabs.length - 1;
        else if (event.key === 'ArrowRight') next = (index + 1) % tabs.length;
        else if (event.key === 'ArrowLeft') next = (index - 1 + tabs.length) % tabs.length;
        if (next === null) return;
        event.preventDefault();
        tabs[next].focus();
        selectSection(tabs[next].dataset.section);
      });
    });
    // Default to the original Games grid. Older #projects bookmarks still open that section.
    selectSection(window.location.hash === '#projects' ? 'projects' : 'games');
  }
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init, { once: true });
  } else {
    init();
  }
})();
