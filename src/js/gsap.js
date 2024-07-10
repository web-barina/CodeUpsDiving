"use strict";
const tl = gsap.timeline();

tl.fromTo(
  ".js-loading__start",
  {
    opacity: 1,
  },
  {
    delay: 1,
    duration: 2,
    autoAlpha: 0,
  }
).fromTo(
  ".js-loading__last",
  {
    opacity: 1,
  },
  {
    delay: 1,
    duration: 1,
    autoAlpha: 0,
  }
);
