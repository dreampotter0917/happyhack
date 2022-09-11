$(function($) {
    $('.bg-switcher').bgSwitcher({
        images: ['images/background1.jpg','images/background2.jpg','images/background3.jpg','images/background4.jpg','images/background5.jpg'],
        interval: 5000,
        loop: true
    });

    // $('#js-slider-2').slick({
    //     arrows: true, // 前・次のボタンを表示する
    //     dots: true, // ドットナビゲーションを表示する
    //     appendDots: $('.dots-2'), // ドットナビゲーションの生成位置を変更
    //     speed: 1000, // スライドさせるスピード（ミリ秒）
    //     slidesToShow: 1, // 表示させるスライド数
    //     centerMode: false, // slidesToShowが奇数のとき、現在のスライドを中央に表示する
    //     variableWidth: true, // スライド幅の自動計算を無効化
    //     autoplay:true,
    //   });

    particlesJS("particle_bg", {
        "particles":{
          "number":{
            "value": 80,
            "density":{
              "enable":true,
              "value_area":600
            }
          },
          "color":{
            "value":"#ffffff"
          },
          "shape":{
            "type":"circle",
            "stroke":{
              "width":0,
              "color":"#000000"
            },
          },
          "opacity":{
            "value":0.5,
            "random":false,
            "anim":{
              "enable":false,
              "speed":1,
              "opacity_min":0.1,
              "sync":false
            }
          },
          "size":{
            "value":3,
            "random":true,
            "anim":{
              "enable":false,
              "speed":40,
              "size_min":0.1,
              "sync":false
            }
          },
          "line_linked":{
            "enable":true,
            "distance":150,
            "color":"#ffffff",
            "opacity":0.4,
            "width":1
          },
          "move":{
            "enable":true,
            "speed":6,
            "direction":"none",
            "random":false,
            "out_mode":"out",
          }
        },
        "interactivity":{
          "detect_on":"canvas",
          "events":{
            "onhover":{
              "enable":false,
            },
            "onclick":{
              "enable":false,
            },
          },
          "modes":{
            "grab":{
              "distance":400,
              "line_linked":{
                "opacity":1
              }
            },
          }
        },
        "retina_detect":true,
        "resize":true
       });


       $(window).scroll(function () {
        $(".effect-fade").each(function () {
          var elemPos = $(this).offset().top; /* 要素の位置を取得 */
          var scroll = $(window).scrollTop(); /* スクロール位置を取得 */
          var windowHeight = $(window).height(); /* 画面幅を取得（画面の下側に入ったときに動作させるため） */
          if (scroll > elemPos - windowHeight) {
            /* 要素位置までスクロール出来たときに動作する */
            $(this).addClass("effect-scroll");
          }
        });
      });

      $(".slider").slick({
        arrows: true,
        autoplay: true,
        adaptiveHeight: true,
        dots: true,
        slidesToShow: 4,
        responsive: [
          {
            breakpoint: 1400, // 399px以下のサイズに適用
            settings: {
              slidesToShow: 1,
            },
          },
        ],
      });
       
});



