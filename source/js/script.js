(function () {

  var hangFlexslider = function () {
    $(document).ready(function() {
      if($(window).width() > 750) {
        $('.greeting__slider').flexslider({
          selector: ".greeting__slider_container > li",
          controlsContainer: ".greeting__flipping",
          animation: "slide",
          easing: "swing",
          slideshow: false,
          startAt: 1,
          smoothHeight: true,
          keyboard: true,
          prevText: '',
          nextText: '',
          itemWidth: 624,
          itemMargin: -312,
          minItems: 1,
          maxItems: 6,
          move: 1,
          controlNav: true,
          directionNav: true,
          touch: true,
          animationLoop: false,
          animationSpeed: 900,
          keyboard: false,
          startAt: 2,
          start: function(slider) {
            $(slider.slides[slider.currentSlide]).addClass('greeting__slider_active');
            $(slider.slides[slider.currentSlide + 1]).addClass('greeting__slider_next');
            $(slider.slides[slider.currentSlide - 1]).addClass('greeting__slider_prev');
            $('.greeting__slider_container').attr('style', 'transform: translate3d(-624px, 0px, 0px);');
          },
          before: function(slider) {
            slider.last = slider.count - 1;
            if (slider.direction === "next") {
              $(slider.slides).removeClass('greeting__slider_active greeting__slider_next greeting__slider_prev');
              $(slider.slides[slider.currentSlide + 1]).addClass('greeting__slider_active');
              $(slider.slides[slider.currentSlide + 2]).addClass('greeting__slider_next');
              $(slider.slides[slider.currentSlide]).addClass('greeting__slider_prev');
            }
            if (slider.direction === "prev") {
              $(slider.slides).removeClass('greeting__slider_active greeting__slider_next greeting__slider_prev');
              $(slider.slides[slider.currentSlide - 1]).addClass('greeting__slider_active');
              $(slider.slides[slider.currentSlide]).addClass('greeting__slider_next');
              $(slider.slides[slider.currentSlide - 2]).addClass('greeting__slider_prev');
            }
          },
          after: function(slider) {
            if(!($(slider.slides[slider.currentSlide]).hasClass('greeting__slider_active'))) {
              $(slider.slides).removeClass('greeting__slider_active greeting__slider_next greeting__slider_prev');
              $(slider.slides[slider.currentSlide]).addClass('greeting__slider_active');
              $(slider.slides[slider.currentSlide + 1]).addClass('greeting__slider_next');
              $(slider.slides[slider.currentSlide - 1]).addClass('greeting__slider_prev');
            }
          }
        });
        $('.result__slider').flexslider({
                selector: ".result__slider_container > li",
                controlsContainer: ".result__flipping",
                animation: "slide",
                easing: "swing",
                slideshow: false,
                startAt: 10,
                smoothHeight: true,
                keyboard: true,
                prevText: '',
                nextText: '',
                itemWidth: 340,
                itemMargin: 25,
                minItems: 1,
                move: 1,
                controlNav: false,
                directionNav: true,
                touch: true,
                animationLoop: false,
                animationSpeed: 900,
                keyboard: false,
                start: function(slider) {
                  $(slider.slides[slider.currentSlide]).addClass('result__slider_active');
                  $(slider.slides[slider.currentSlide + 1]).addClass('result__slider_next');
                  $(slider.slides[slider.currentSlide - 1]).addClass('result__slider_prev');
                  $('.result__slider_container').attr('style', 'transform: translate3d(-3650px, 0px, 0px);');
                },
                before: function(slider) {
                  slider.last = slider.count - 1;
                  if (slider.direction === "next") {
                    $(slider.slides).removeClass('result__slider_active result__slider_next result__slider_prev');
                    $(slider.slides[slider.currentSlide + 1]).addClass('result__slider_active');
                    $(slider.slides[slider.currentSlide + 2]).addClass('result__slider_next');
                    $(slider.slides[slider.currentSlide]).addClass('result__slider_prev');
                  }
                  if (slider.direction === "prev") {
                    $(slider.slides).removeClass('result__slider_active result__slider_next result__slider_prev');
                    $(slider.slides[slider.currentSlide - 1]).addClass('result__slider_active');
                    $(slider.slides[slider.currentSlide]).addClass('result__slider_next');
                    $(slider.slides[slider.currentSlide - 2]).addClass('result__slider_prev');
                  }
                },
                after: function(slider) {
                  if(!($(slider.slides[slider.currentSlide]).hasClass('result__slider_active'))) {
                    $(slider.slides).removeClass('result__slider_active result__slider_next result__slider_prev');
                    $(slider.slides[slider.currentSlide]).addClass('result__slider_active');
                    $(slider.slides[slider.currentSlide + 1]).addClass('result__slider_next');
                    $(slider.slides[slider.currentSlide - 1]).addClass('result__slider_prev');
                  }
                }
        });
      }

      if($(window).width() < 751) {
        $('.greeting__slider').flexslider({
          selector: ".greeting__slider_container > li",
          controlsContainer: ".greeting__flipping",
          animation: "slide",
          easing: "swing",
          slideshow: false,
          startAt: 2,
          smoothHeight: true,
          keyboard: true,
          prevText: '',
          nextText: '',
          itemWidth: 280,
          itemMargin: 0,
          minItems: 1,
          maxItems: 6,
          move: 1,
          controlNav: true,
          directionNav: true,
          touch: true,
          animationLoop: false,
          animationSpeed: 900,
          keyboard: false,
          start: function(slider) {
            $(slider.slides[slider.currentSlide]).addClass('greeting__slider_active');
            $(slider.slides[slider.currentSlide + 1]).addClass('greeting__slider_next');
            $(slider.slides[slider.currentSlide - 1]).addClass('greeting__slider_prev');
          },
          before: function(slider) {
            slider.last = slider.count - 1;
            if (slider.direction === "next") {
              $(slider.slides).removeClass('greeting__slider_active greeting__slider_next greeting__slider_prev');
              $(slider.slides[slider.currentSlide + 1]).addClass('greeting__slider_active');
              $(slider.slides[slider.currentSlide + 2]).addClass('greeting__slider_next');
              $(slider.slides[slider.currentSlide]).addClass('greeting__slider_prev');
            }
            if (slider.direction === "prev") {
              $(slider.slides).removeClass('greeting__slider_active greeting__slider_next greeting__slider_prev');
              $(slider.slides[slider.currentSlide - 1]).addClass('greeting__slider_active');
              $(slider.slides[slider.currentSlide]).addClass('greeting__slider_next');
              $(slider.slides[slider.currentSlide - 2]).addClass('greeting__slider_prev');
            }
          },
          after: function(slider) {
            if(!($(slider.slides[slider.currentSlide]).hasClass('greeting__slider_active'))) {
              $(slider.slides).removeClass('greeting__slider_active greeting__slider_next greeting__slider_prev');
              $(slider.slides[slider.currentSlide]).addClass('greeting__slider_active');
              $(slider.slides[slider.currentSlide + 1]).addClass('greeting__slider_next');
              $(slider.slides[slider.currentSlide - 1]).addClass('greeting__slider_prev');
            }
          }
        });
        $('.result__slider').flexslider({
                selector: ".result__slider_container > li",
                controlsContainer: ".result__flipping",
                animation: "slide",
                easing: "swing",
                slideshow: false,
                startAt: 2,
                smoothHeight: true,
                keyboard: true,
                prevText: '',
                nextText: '',
                itemWidth: 280,
                itemMargin: 0,
                minItems: 1,
                maxItems: 6,
                move: 1,
                controlNav: false,
                directionNav: true,
                touch: true,
                animationLoop: false,
                animationSpeed: 900,
                keyboard: false,
                start: function(slider) {
                  $(slider.slides[slider.currentSlide]).addClass('result__slider_active');
                  $(slider.slides[slider.currentSlide + 1]).addClass('result__slider_next');
                  $(slider.slides[slider.currentSlide - 1]).addClass('result__slider_prev');
                },
                before: function(slider) {
                  slider.last = slider.count - 1;
                  if (slider.direction === "next") {
                    $(slider.slides).removeClass('result__slider_active result__slider_next result__slider_prev');
                    $(slider.slides[slider.currentSlide + 1]).addClass('result__slider_active');
                    $(slider.slides[slider.currentSlide + 2]).addClass('result__slider_next');
                    $(slider.slides[slider.currentSlide]).addClass('result__slider_prev');
                  }
                  if (slider.direction === "prev") {
                    $(slider.slides).removeClass('result__slider_active result__slider_next result__slider_prev');
                    $(slider.slides[slider.currentSlide - 1]).addClass('result__slider_active');
                    $(slider.slides[slider.currentSlide]).addClass('result__slider_next');
                    $(slider.slides[slider.currentSlide - 2]).addClass('result__slider_prev');
                  }
                },
                after: function(slider) {
                  if(!($(slider.slides[slider.currentSlide]).hasClass('result__slider_active'))) {
                    $(slider.slides).removeClass('result__slider_active result__slider_next result__slider_prev');
                    $(slider.slides[slider.currentSlide]).addClass('result__slider_active');
                    $(slider.slides[slider.currentSlide + 1]).addClass('result__slider_next');
                    $(slider.slides[slider.currentSlide - 1]).addClass('result__slider_prev');
                  }
                }
        });
      }
    });
  };

  var showMenu = function () {
    $('.menu__burger').click( function (evt) {
      evt.preventDefault();
      $('.menu__close, .menu__clause').addClass('display_on');
      $('.menu__burger, .menu__logo').addClass('display_off');
      $('.menu__list').addClass('menu__list_col');
      $('.menu__button').addClass('menu__button_open');
    });
    $('.menu__close').click( function (evt) {
      evt.preventDefault();
      $('.menu__close, .menu__clause').removeClass('display_on');
      $('.menu__burger, .menu__logo').removeClass('display_off');
      $('.menu__list').removeClass('menu__list_col');
      $('.menu__button').removeClass('menu__button_open');
    });
  };

  var slowScroll = function () {
    $(document).ready(function() {
      if($(window).width() > 750) {
        $('#landing-link').click(function (evt) {
          evt.preventDefault();
          $('body').scrollTo(
            $('#reasons'), {
            axis: 'y',
            duration: 900,
            offset: -80,
          });
        });

        $('#reasons-link').click(function (evt) {
          evt.preventDefault();
          $('body').scrollTo(
            $('#greeting'), {
            axis: 'y',
            duration: 900,
            offset: -80,
          });
        });
      };

      if($(window).width() < 751) {
        $('#landing-link').click(function (evt) {
          evt.preventDefault();
          $('body').scrollTo(
            $('#reasons'), {
            axis: 'y',
            duration: 900,
            offset: -64,
          });
        });

        $('#reasons-link').click(function (evt) {
          evt.preventDefault();
          $('body').scrollTo(
            $('#greeting'), {
            axis: 'y',
            duration: 900,
            offset: -64,
          });
        });
      };
    });
  };

  var scrollBarСustomization = function () {
    if($(window).width() > 750) {

      // $('html').niceScroll({
      //   cursorborder: "none",
      //   horizrailenabled: false
      // });
      // $('.course__popup').niceScroll({
      //   cursorborder: "none",
      //   horizrailenabled: false
      // });
      $('.team__diploma-popup').niceScroll({
        cursorborder: "none",
        horizrailenabled: false,
        cursorcolor:"#ffffff",
        cursoropacitymin: 0,
      });
    }
  };

  var getBlockQuestionsSlider = function () {
    $('#questions-button').click( function (evt) {
        evt.preventDefault();
        $('.questions__hidden').slideToggle('fast', function() {
          $(evt.target).parents('.item').toggleClass('active');
        });
      $('body').getNiceScroll().resize();
    });

    if($(window).width() < 751) {
      $('.course__popup-number').click( function (evt) {
          evt.preventDefault();
          $(evt.target).parents('.course__popup-module').find('.course__popup-hidden').slideToggle('fast', function() {
            $(evt.target).parents('.course__popup-module').toggleClass('active');
          });
      });
    }
  };

  var showPopUpVideo = function () {
    $('.history__video-play, .history__video-image').click(function (event) {
      event.preventDefault();
      $('.history__video-iframe, .button__close, .overlay').css({'opacity': 1, 'display': 'flex'});
      $('.history__video-iframe').each(function(){
        this.contentWindow.postMessage('{"event":"command","func":"playVideo","args":""}', '*')
      });
      scrollLock.disablePageScroll();
    });

    $(' .button__close, .overlay').click(function () {
      $('.history__video-iframe, .button__close, .overlay').css({'opacity': 0, 'display': 'none'});
      $('.history__video-iframe').each(function() {
        this.contentWindow.postMessage('{"event":"command","func":"stopVideo","args":""}', '*')
      });
      scrollLock.enablePageScroll();
    });

    $(document).keydown(function(event) {
      if (event.keyCode === 27) {
        event.stopPropagation();
        $('.history__video-iframe, .button__close, .overlay').css({'opacity': 0, 'display': 'none'});
        $('.history__video-iframe').each(function(){
          this.contentWindow.postMessage('{"event":"command","func":"stopVideo","args":""}', '*')
        });
        scrollLock.enablePageScroll();
      }
    });
  };

  var showPopUpDiploma = function () {
    var scrollableElement = document.querySelector('.team__diploma-popup');
    $('.team__diploma-link').click(function (event) {
      event.preventDefault();
      $('.team__diploma-popup, .button__close, .overlay').css({'opacity': 1, 'display': 'flex'});
      scrollLock.disablePageScroll(scrollableElement);
      if($(window).width() < 751) {
        $('.team__slider').flexslider({
          selector: ".team__slider_container > li",
          controlsContainer: ".team__flipping",
          animation: "slide",
          easing: "swing",
          slideshow: false,
          startAt: 1,
          smoothHeight: true,
          keyboard: true,
          prevText: '',
          nextText: '',
          itemWidth: 280,
          itemMargin: 0,
          minItems: 1,
          maxItems: 6,
          move: 1,
          controlNav: true,
          directionNav: true,
          touch: true,
          animationLoop: false,
          animationSpeed: 900,
          start: function(slider) {
            $('.team__slider_container').attr('style', 'transform: translate3d(-280px, 0px, 0px);');
          }
        });
      }
    });
    $('.button__close, .overlay').click(function () {
      $('.team__diploma-popup, .button__close, .overlay').css({'opacity': 0, 'display': 'none'});
      scrollLock.enablePageScroll(scrollableElement);
    });
    $(document).keydown(function(event) {
      if (event.keyCode === 27) {
        event.stopPropagation();
        $('.team__diploma-popup, .button__close, .overlay').css({'opacity': 0, 'display': 'none'});
        scrollLock.enablePageScroll(scrollableElement);
      }
    });
  };

  var showPopUpIdealBody = function () {
    var scrollableElement = document.querySelector('.course__popup-ideal-body');
    $('.course__open-ideal-body').click(function (event) {
      event.preventDefault();
      $('.course__popup-ideal-body, .button__close, .overlay').css({'opacity': 1, 'display': 'flex'});
      scrollLock.disablePageScroll(scrollableElement);
      if($(window).width() < 751) {
        $('.course__popup-slider').flexslider({
          selector: ".course__popup-cost > li",
          controlsContainer: ".course__popup-flipping",
          animation: "slide",
          easing: "swing",
          slideshow: false,
          startAt: 0,
          smoothHeight: true,
          keyboard: true,
          prevText: '',
          nextText: '',
          itemWidth: 240,
          itemMargin: 8,
          move: 1,
          controlNav: true,
          directionNav: true,
          touch: true,
          animationLoop: true,
          animationSpeed: 900,
        });
      }
    });

    $(' .button__close, .overlay').click(function () {
      $('.course__popup-ideal-body, .button__close, .overlay').css({'opacity': 0, 'display': 'none'});
      scrollLock.enablePageScroll(scrollableElement);
    });
    $(document).keydown(function(event) {
      if (event.keyCode === 27) {
        event.stopPropagation();
        $('.course__popup-ideal-body, .button__close, .overlay').css({'opacity': 0, 'display': 'none'});
        scrollLock.enablePageScroll(scrollableElement);
      }
    });
  }

  var showPopUpBeautifulButtocks = function () {
    var scrollableElement = document.querySelector('.course__popup-beautiful-buttocks');
    $('.course__open-beautiful-buttocks').click(function (event) {
      event.preventDefault();
      $('.course__popup-beautiful-buttocks, .button__close, .overlay').css({'opacity': 1, 'display': 'flex'});
      scrollLock.disablePageScroll(scrollableElement);
    });

    $(' .button__close, .overlay').click(function () {
      $('.course__popup-beautiful-buttocks, .button__close, .overlay').css({'opacity': 0, 'display': 'none'});
      scrollLock.enablePageScroll(scrollableElement);
    });
    $(document).keydown(function(event) {
      if (event.keyCode === 27) {
        event.stopPropagation();
        $('.course__popup-beautiful-buttocks, .button__close, .overlay').css({'opacity': 0, 'display': 'none'});
        scrollLock.enablePageScroll(scrollableElement);
      }
    });
  }

  var showPopUpJodhpurs = function () {
    var scrollableElement = document.querySelector('.course__popup-jodhpurs');
    $('.course__open-jodhpurs').click(function (event) {
      event.preventDefault();
      $('.course__popup-jodhpurs, .button__close, .overlay').css({'opacity': 1, 'display': 'flex'});
      scrollLock.disablePageScroll(scrollableElement);
    });

    $(' .button__close, .overlay').click(function () {
      $('.course__popup-jodhpurs, .button__close, .overlay').css({'opacity': 0, 'display': 'none'});
      scrollLock.enablePageScroll(scrollableElement);
    });
    $(document).keydown(function(event) {
      if (event.keyCode === 27) {
        event.stopPropagation();
        $('.course__popup-jodhpurs, .button__close, .overlay').css({'opacity': 0, 'display': 'none'});
        scrollLock.enablePageScroll(scrollableElement);
      }
    });
  }

  var showPopUpFlatStomach = function () {
    var scrollableElement = document.querySelector('.course__popup-flat-stomach');
    $('.course__open-flat-stomach').click(function (event) {
      event.preventDefault();
      $('.course__popup-flat-stomach, .button__close, .overlay').css({'opacity': 1, 'display': 'flex'});
      scrollLock.disablePageScroll(scrollableElement);
    });

    $(' .button__close, .overlay').click(function () {
      $(' .course__popup-flat-stomach, .button__close, .overlay').css({'opacity': 0, 'display': 'none'});
      scrollLock.enablePageScroll(scrollableElement);
    });
    $(document).keydown(function(event) {
      if (event.keyCode === 27) {
        event.stopPropagation();
        $('.course__popup-flat-stomach, .button__close, .overlay').css({'opacity': 0, 'display': 'none'});
        scrollLock.enablePageScroll(scrollableElement);
      }
    });
  }

  var getShadowMenu = function () {
    if($(window).width() > 750) {
      $(window).scroll(function() {
        if($(this).scrollTop() >= 80) {
            $('.header').addClass('header__shadow');
        }
        else{
            $('.header').removeClass('header__shadow');
        }
      });
    };

    if($(window).width() < 751) {
      $(window).scroll(function() {
        if($(this).scrollTop() >= 64) {
            $('.header').addClass('header__shadow');
        }
        else{
            $('.header').removeClass('header__shadow');
        }
      });
    };
  };

  hangFlexslider();
  showMenu();
  slowScroll();
  getBlockQuestionsSlider();
  showPopUpVideo();
  showPopUpDiploma();
  scrollBarСustomization();
  showPopUpIdealBody();
  showPopUpBeautifulButtocks();
  showPopUpJodhpurs();
  showPopUpFlatStomach();
  getShadowMenu();

}());
