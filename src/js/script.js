jQuery(function ($) {
  // この中であればWordpressでも「$」が使用可能になる
  /*****
    ハンバーガーメニュー
    *****/
  $("#js-header-hamburger").on("click", function () {
    if ($("#js-header-hamburger").hasClass("active")) {
      $(".header__sp-nav").fadeOut();
      $(this).removeClass("active");
    } else {
      $(".header__sp-nav").fadeIn();
      $(this).addClass("active");
    }
  }); //ハンバーガーメニュー閉じタグ
  //768px以上でドロワーを非表示にする
  $(window).on("resize", function () {
    if (window.matchMedia("(min-width: 768px)").matches) {
      $("#js-header-hamburger").removeClass("active");
      $(".header__sp-nav").fadeOut();
    }
  });
  /*****
    FV-swiper
    *****/
  var topFVswiper = new Swiper("#js-topFVswiper", {
    effect: "fade",
    speed: 1500,
    autoplay: {
      delay: 3000,
      disableOnInteraction: false,
    },
  });

  /******************
   * campaign-swiper*
   ******************/
  var topCampaign = new Swiper("#js-topCampaignSwiper", {
    slidesPerView: "auto",
    loop: true,
    autoplay: 5000,
    spaceBetween: 24,
    breakpoints: {
      768: {
        spaceBetween: 40,
      },
    },
    navigation: {
      nextEl: ".topCampaign__swiper-button-next",
      prevEl: ".topCampaign__swiper-button-prev",
    },
  });
  /***************
    カラーボックス
    **************/
  var box = $(".js-color-box"),
    speed = 700;

  box.each(function () {
    $(this).append('<div class="color"></div>');
    var color = $(this).find($(".color")),
      image = $(this).find("img");
    var counter = 0;

    image.css("opacity", "0");
    color.css("width", "0%");

    color.on("inview", function () {
      if (counter == 0) {
        $(this)
          .delay(200)
          .animate({ width: "100%" }, speed, function () {
            image.css("opacity", "1");
            $(this).css({ left: "0", right: "auto" });
            $(this).animate({ width: "0%" }, speed);
          });
        counter = 1;
      }
    });
  }); //カラーボックス閉じタグ

  /*********************
   スクロールトップ
   *******************/
  //スクロールした際の動きを関数でまとめる
  function PageTopAnime() {
    var scroll = $(window).scrollTop();
    if (scroll >= 300) {
      $("#footer__js-scroll-top").removeClass("DownMove");
      $("#footer__js-scroll-top").addClass("UpMove");
    } else {
      if ($("#footer__js-scroll-top").hasClass("UpMove")) {
        $("#footer__js-scroll-top").removeClass("UpMove");
        $("#footer__js-scroll-top").addClass("DownMove");
      }
    }

    var wH = window.innerHeight;
    var footerPos = $("#footer").offset().top;
    if (scroll + wH >= footerPos + 10) {
      var pos = scroll + wH - footerPos + 10; //スクロールの値＋画面の高さからfooterの位置＋10pxを引いた場所を取得し
      $("#footer__js-scroll-top").css("bottom", pos);
    } else {
      //それ以外は
      if ($("#footer__js-scroll-top").hasClass("UpMove")) {
        $("#footer__js-scroll-top").css("bottom", "10px");
      }
    }
  }
  // 画面をスクロールをしたら動かしたい場合の記述
  $(window).scroll(function () {
    PageTopAnime();
  });
  // ページが読み込まれたらすぐに動かしたい場合の記述
  $(window).on("load", function () {
    PageTopAnime();
  });
  // #scroll-topをクリックした際の設定
  $("#js-scroll-top").click(function () {
    $("body,html").animate(
      {
        scrollTop: 0, //ページトップまでスクロール
      },
      500
    ); //ページトップスクロールの速さ。
    return false; //リンク自体の無効化
  });
});
