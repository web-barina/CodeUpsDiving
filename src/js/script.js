jQuery(function ($) {
  // この中であればWordpressでも「$」が使用可能になる
  /*****
    ハンバーガーメニュー
    *****/
  $("#hamburger").on("click", function () {
    if ($("#hamburger").hasClass("active")) {
      $(".sp-nav").fadeOut();
      $(this).removeClass("active");
    } else {
      $(".sp-nav").fadeIn();
      $(this).addClass("active");
    }
  }); //ハンバーガーメニュー閉じタグ
  //768px以上でドロワーを非表示にする
  $(window).on("resize", function () {
    if (window.matchMedia("(min-width: 768px)").matches) {
      $("#hamburger").removeClass("active");
      $(".sp-nav").fadeOut();
    }
  });
  /*****
    FV-swiper
    *****/
  var FVswiper = new Swiper("#FVswiper", {
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
  var topCampaignSwiper = new Swiper("#topCampaignSwiper", {
    slidesPerView: "auto",
    loop: true,
    spaceBetween: 24,
    breakpoints: {
      768: {
        spaceBetween: 40,
      },
    },
    navigation: {
      nextEl: ".top-swiper-button-next",
      prevEl: ".top-swiper-button-prev",
    },
  });
  /***************
    カラーボックス
    **************/
  var box = $(".colorbox"),
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
      $("#scroll-top").removeClass("DownMove");
      $("#scroll-top").addClass("UpMove");
    } else {
      if ($("#scroll-top").hasClass("UpMove")) {
        $("#scroll-top").removeClass("UpMove");
        $("#scroll-top").addClass("DownMove");
      }
    }

    var wH = window.innerHeight;
    var footerPos = $("#footer").offset().top;
    if (scroll + wH >= footerPos + 10) {
      var pos = scroll + wH - footerPos + 16; //スクロールの値＋画面の高さからfooterの位置＋16pxを引いた場所を取得し
      $("#scroll-top").css("bottom", pos);
    } else {
      //それ以外は
      if ($("#scroll-top").hasClass("UpMove")) {
        $("#scroll-top").css("bottom", "10px");
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
  $("#scroll-top").click(function () {
    $("body,html").animate(
      {
        scrollTop: 0, //ページトップまでスクロール
      },
      500
    ); //ページトップスクロールの速さ。
    return false; //リンク自体の無効化
  });
});
