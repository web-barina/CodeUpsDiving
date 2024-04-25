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
  var campaignSwiper = new Swiper("#campaignSwiper", {
    loop: true,
    slidesPerView: 1.2,
    breakpoints: {
      768: {
        slidesPerView: 2.5,
      },
      1000: {
        slidesPerView: 3.3,
      },
    },
    spaceBetween: 40,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });

  /***************
    カラーボックス
    **************/
  //要素の取得とスピードの設定
  var box = $(".colorbox"),
    speed = 700;

  //.colorboxの付いた全ての要素に対して下記の処理を行う
  box.each(function () {
    $(this).append('<div class="color"></div>');
    var color = $(this).find($(".color")),
      image = $(this).find("img");
    var counter = 0;

    image.css("opacity", "0");
    color.css("width", "0%");
    //inviewを使って背景色が画面に現れたら処理をする
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
    var scroll = $(window).scrollTop(); //スクロール値を取得
    if (scroll >= 300) {
      //200pxスクロールしたら
      $("#scroll-top").removeClass("DownMove"); // DownMoveというクラス名を除去して
      $("#scroll-top").addClass("UpMove"); // UpMoveというクラス名を追加して出現
    } else {
      //それ以外は
      if ($("#scroll-top").hasClass("UpMove")) {
        //UpMoveというクラス名が既に付与されていたら
        $("#scroll-top").removeClass("UpMove"); //  UpMoveというクラス名を除去し
        $("#scroll-top").addClass("DownMove"); // DownMoveというクラス名を追加して非表示
      }
    }

    var wH = window.innerHeight; //画面の高さを取得
    var footerPos = $("#footer").offset().top; //footerの位置を取得
    if (scroll + wH >= footerPos + 10) {
      var pos = scroll + wH - footerPos + 16; //スクロールの値＋画面の高さからfooterの位置＋16pxを引いた場所を取得し
      $("#scroll-top").css("bottom", pos); //#scroll-topに上記の値をCSSのbottomに直接指定してフッター手前で止まるようにする
    } else {
      //それ以外は
      if ($("#scroll-top").hasClass("UpMove")) {
        //UpMoveというクラス名がついていたら
        $("#scroll-top").css("bottom", "10px"); // 下から10pxの位置にページリンクを指定
      }
    }
  }

  // 画面をスクロールをしたら動かしたい場合の記述
  $(window).scroll(function () {
    PageTopAnime(); /* スクロールした際の動きの関数を呼ぶ*/
  });

  // ページが読み込まれたらすぐに動かしたい場合の記述
  $(window).on("load", function () {
    PageTopAnime(); /* スクロールした際の動きの関数を呼ぶ*/
  });

  // #scroll-topをクリックした際の設定
  $("#scroll-top").click(function () {
    $("body,html").animate(
      {
        scrollTop: 0, //ページトップまでスクロール
      },
      500
    ); //ページトップスクロールの速さ。数字が大きいほど遅くなる
    return false; //リンク自体の無効化
  });
});
