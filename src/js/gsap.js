"use strict";
const tl = gsap.timeline();
gsap.fromTo(
  ".top-js-loading__start",
  { opacity: 1 },
  {
    autoAlpha: 0,
    delay: 1,
    duration: 1,
  }
);
fromTo(
  ".top-js-loading__last",
  { opacity: 1 },
  {
    delay: 1,
    duration: 1,
    opacity: 0,
    onComplete: function () {
      // アニメーションが終了したら要素を削除する
      document.querySelector(".top-js-loading__last").remove();
    },
  }
);
