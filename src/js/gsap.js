"use strict";

document.addEventListener("DOMContentLoaded", (event) => {
  gsap.registerPlugin(ScrollTrigger);
  gsap.fromTo(".js-loading__start", { opacity: 1, delay: 3, duration: 5 }, { autoAlpha: 0, duration: 1 });
});
