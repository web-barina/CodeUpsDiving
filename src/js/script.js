jQuery(function ($) {
  // この中であればWordpressでも「$」が使用可能になる

  /*****
    ハンバーガーメニュー
    *****/
  $("#js-hamburger").on("click", function () {
    if ($("#js-hamburger").hasClass("active")) {
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
      $("#js-hamburger").removeClass("active");
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
  var topCampaign = new Swiper("#js-topCampaign", {
    slidesPerView: "auto",
    loop: true,
    speed: 1000,
    autoplay: {
      delay: 3000,
    },
    spaceBetween: 24,
    breakpoints: {
      768: {
        spaceBetween: 40,
      },
    },
    navigation: {
      nextEl: ".topCampaign__next",
      prevEl: ".topCampaign__prev",
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
      $("#js-scroll-top").removeClass("DownMove");
      $("#js-scroll-top").addClass("UpMove");
    } else {
      if ($("#js-scroll-top").hasClass("UpMove")) {
        $("#js-scroll-top").removeClass("UpMove");
        $("#js-scroll-top").addClass("DownMove");
      }
    }

    var wH = window.innerHeight;
    var footerPos = $("#footer").offset().top;
    if (scroll + wH >= footerPos + 10) {
      var pos = scroll + wH - footerPos + 10; //スクロールの値＋画面の高さからfooterの位置＋10pxを引いた場所を取得し
      $("#js-scroll-top").css("bottom", pos);
    } else {
      //それ以外は
      if ($("#js-scroll-top").hasClass("UpMove")) {
        $("#js-scroll-top").css("bottom", "10px");
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

  /* FAQアコーディオン */
});
$(function () {
  $("#js-accordion-question").on("click", function () {
    $(this).next().slideToggle(300);
    $(this).toggleClass("open", 300);
  });

  /*campaignタブメニュー*/
  $(function () {
    // 変数を要素をセット
    var $tab = $(".campaign__tabs [tab]"),
      $category = $(".campaign__category [category]");

    // カテゴリをクリックしたら
    $tab.click(function (e) {
      // デフォルトの動作をキャンセル
      e.preventDefault();
      var $this = $(this);

      // クリックしたカテゴリにクラスを付与
      $tab.removeClass("is-button-active");
      $this.addClass("is-active");

      // クリックした要素のdata属性を取得
      var $tabItem = $this.attr("tab");

      // データ属性が all なら全ての要素を表示
      if ($tabItem == "campaign-all") {
        $item
          .removeClass("is-active")
          .fadeOut()
          .promise()
          .done(function () {
            $item.addClass("is-active").fadeIn();
          });
        // all 以外の場合は、クリックした要素のdata属性の値を同じ値のアイテムを表示
      } else {
        $item
          .removeClass("is-active")
          .fadeOut()
          .promise()
          .done(function () {
            $item
              .tab('[category = "' + $tabItem + '"]')
              .addClass("is-active")
              .fadeIn();
          });
      }
    });
  });

  /*infoタブメニュー*/
  $(function () {
    $(".info__button").on("click", function () {
      let index = $(".info__button").index(this);

      $(".info__button").removeClass("is-btn-active");
      $(this).addClass("is-btn-active");
      $(".info__content").removeClass("is-content-active");
      $(".info__content").eq(index).addClass("is-content-active");
    });
  });
});
