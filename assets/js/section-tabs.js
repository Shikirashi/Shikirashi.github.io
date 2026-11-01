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
    const projectVideos = Array.from(panels.projects.querySelectorAll('video[data-project-motion]'));
    const reduceMotion = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    function syncProjectVideo(section) {
      projectVideos.forEach(function (video) {
        if (section === 'projects' && !reduceMotion && !document.hidden) {
          const request = video.play();
          if (request && typeof request.catch === 'function') request.catch(function () {});
        } else {
          video.pause();
        }
      });
    }

    function selectSection(section) {
      if (section !== 'projects' && section !== 'games') return;
      panels.projects.hidden = section !== 'projects';
      panels.games.hidden = section !== 'games';
      syncProjectVideo(section);

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
    document.addEventListener('visibilitychange', function () {
      syncProjectVideo(panels.projects.hidden ? 'games' : 'projects');
    });
    // Projects is the default public landing section; #games remains a direct bookmark.
    selectSection(window.location.hash === '#games' ? 'games' : 'projects');
  }
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init, { once: true });
  } else {
    init();
  }
})();
