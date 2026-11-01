/**
* Template Name: MyPortfolio - v4.6.0
* Template URL: https://bootstrapmade.com/myportfolio-bootstrap-portfolio-website-template/
* Author: BootstrapMade.com
* License: https://bootstrapmade.com/license/
*/
(function() {
  "use strict";

  /**
   * Easy selector helper function
   */
  const select = (el, all = false) => {
    el = el.trim()
    if (all) {
      return [...document.querySelectorAll(el)]
    } else {
      return document.querySelector(el)
    }
  }

  /**
   * Easy event listener function
   */
  const on = (type, el, listener, all = false) => {
    let selectEl = select(el, all)
    if (selectEl) {
      if (all) {
        selectEl.forEach(e => e.addEventListener(type, listener))
      } else {
        selectEl.addEventListener(type, listener)
      }
    }
  }

  /**
   * Easy on scroll event listener 
   */
  const onscroll = (el, listener) => {
    el.addEventListener('scroll', listener)
  }

  /**
   * burgerMenu
   */
  const burgerMenu = select('.burger')
  on('click', '.burger', function(e) {
    burgerMenu.classList.toggle('active');
  })

  /**
   * Projects/Games switcher. Both panels live in the same document.
   * Hash state is bookmarkable and supports the browser Back button.
   */
  window.addEventListener('DOMContentLoaded', () => {
    const tabs = [...document.querySelectorAll('[data-portfolio-tab]')];
    const panels = {
      projects: document.getElementById('projects-panel'),
      games: document.getElementById('games-panel')
    };
    if (!tabs.length || !panels.projects || !panels.games) return;

    function showTab(key, updateUrl = false) {
      const selected = key === 'games' ? 'games' : 'projects';
      for (const name of ['projects', 'games']) {
        panels[name].hidden = name !== selected;
      }
      tabs.forEach(tab => {
        const active = tab.dataset.portfolioTab === selected;
        tab.classList.toggle('active', active);
        tab.setAttribute('aria-selected', String(active));
        tab.tabIndex = active ? 0 : -1;
      });
      document.title = (selected === 'games' ? 'Games' : 'Projects') + ' · Muhammad Naufal Faza';
      if (updateUrl && window.location.hash !== '#' + selected) {
        window.history.pushState({ portfolioTab: selected }, '', '#' + selected);
      }
      if (window.AOS && typeof window.AOS.refresh === 'function') {
        window.requestAnimationFrame(() => window.AOS.refresh());
      }
    }
    tabs.forEach(tab => {
      tab.addEventListener('click', event => {
        event.preventDefault();
        showTab(tab.dataset.portfolioTab, true);
      });
      tab.addEventListener('keydown', event => {
        if (!['ArrowLeft', 'ArrowRight', 'Home', 'End'].includes(event.key)) return;
        event.preventDefault();
        const next = event.key === 'Home' ? 0 : event.key === 'End' ? 1 : 1 - tabs.indexOf(tab);
        tabs[next].focus();
        showTab(tabs[next].dataset.portfolioTab, true);
      });
    });
    window.addEventListener('popstate', () => showTab(window.location.hash === '#games' ? 'games' : 'projects'));
    window.addEventListener('hashchange', () => showTab(window.location.hash === '#games' ? 'games' : 'projects'));
    showTab(window.location.hash === '#games' ? 'games' : 'projects');
  });

  /**
   * Testimonials slider
   */
  new Swiper('.testimonials-slider', {
    speed: 600,
    loop: true,
    autoplay: {
      delay: 5000,
      disableOnInteraction: false
    },
    slidesPerView: 'auto',
    pagination: {
      el: '.swiper-pagination',
      type: 'bullets',
      clickable: true
    }
  });

  /**
   * Animation on scroll
   */
  window.addEventListener('load', () => {
    AOS.init({
      duration: 1000,
      easing: 'ease-in-out',
      once: true,
      mirror: false
    })
  });

})()