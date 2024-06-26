jQuery(function ($) {
  // この中であればWordpressでも「$」が使用可能になる

  /*********************
   *ハンバーガーメニュー*
   *********************/
  $("#js-hamburger").on("click", function () {
    if ($("#js-hamburger").hasClass("js-active")) {
      $(".header__sp-nav").fadeOut();
      $(this).removeClass("js-active");
    } else {
      $(".header__sp-nav").fadeIn();
      $(this).addClass("js-active");
    }
  });
  //768px以上でドロワーを非表示にする
  $(window).on("resize", function () {
    if (window.matchMedia("(min-width: 768px)").matches) {
      $("#js-hamburger").removeClass("js-active");
      $(".header__sp-nav").fadeOut();
    }
  });

  /***********
   *FV-swiper*
   ***********/
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

  /**************
   *カラーボックス*
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
  });

  /*****************
   *スクロールトップ*
   *****************/
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
      var pos = scroll + wH - footerPos + 15; //スクロールの値＋画面の高さからfooterの位置＋15pxを引いた場所を取得し
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

  /******************
   *FAQアコーディオン*
   ******************/
  $(function () {
    $(".faq__question").on("click", function () {
      var $answer = $(this).next();
      $answer.slideToggle(300);
      $(this).toggleClass("open", 300);
    });
  });

  /********************
   *campaignタブメニュー*
   *********************/

  /******************
   *AboutUs モーダル*
   *****************/
  $(document).ready(
    $(function () {
      $(".gallery__a,.gallery__b,.gallery__c,.gallery__d,.gallery__e,.gallery__f").on("click", function () {
        var modal_id = $(this).attr("id");
        $(".modal#cont-" + modal_id).fadeIn(200);
        $(".modal#cont-" + modal_id).addClass("active");
        $("html, body").css("overflow-y", "hidden");
      });

      $(".modal").on("click", function () {
        if ($(this).hasClass("active")) {
          $(this).fadeOut();
          $("html, body").css("overflow-y", "auto");
        }
      });
    })
  );

  /*****************
   *infoタブメニュー*
   *****************/
  $(function () {
    $(".info__tab").on("click", function () {
      $(".info__tab, .info__content").removeClass("js-active");

      $(this).addClass("js-active");

      var index = $(".info__tab").index(this);
      $(".info__content").eq(index).addClass("js-active");
    });
  });

  //ページ内リンクでジャンプした時、該当のタブがクリックされている状態にする
  document.addEventListener("DOMContentLoaded", function () {
    function activateTab(tabId) {
      document.querySelectorAll(".tab").forEach(function (tab) {
        tab.classList.remove("js-active");
      });
      const activeTab = document.getElementById(tabId);
      if (activeTab) {
        activeTab.classList.add("js-active");
      }
    }

    const hash = window.location.hash.substring(1);
    if (hash) {
      activateTab(hash + "-tab");
    }

    // タブクリック時のハッシュ更新
    document.querySelectorAll(".tab").forEach(function (tab) {
      tab.addEventListener("click", function () {
        window.location.hash = this.id.replace("-tab", "");
      });
    });
  });

  /********************
   *サイドバーアーカイブ*
   ********************/
  $(function () {
    $(".sidebar__archive-year").on("click", function () {
      $(this).next().slideToggle(300);
      $(this).toggleClass("open", 300);
    });
  });
  /***********************
   *ローディング2回目非表示*
   ***********************/
  var loadingAnime = $.cookie("accessdate"); //キーが入っていれば年月日を取得
  var myD = new Date(); //日付データを取得
  var myYear = String(myD.getFullYear()); //年
  var myMonth = String(myD.getMonth() + 1); //月
  var myDate = String(myD.getDate()); //日
  if (loadingAnime != myYear + myMonth + myDate) {
    //cookieデータとアクセスした日付を比較↓
    $(".js-loading").css("display", "block"); //１回目はローディングを表示
  } else {
    $(".js-loading").css("display", "none"); //同日2回目のアクセスでローディング画面非表示
  }
});
