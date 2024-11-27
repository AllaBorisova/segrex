jQuery(document).ready(function ($) {
  //mobile menu
  $('.hamburger').click(function () {
    $('.hamburger').toggleClass('is-active');
    $('body').toggleClass('open-menu');
  });

  // $('.header-popup__close').click(function () {
  //   $('.hamburger').toggleClass('is-active');
  //   $('body').toggleClass('open-menu');
  // });

  $(document).mouseup(function (e) {
    const container = $('.header-new-popup');
    if (!container.is(e.target) && container.has(e.target).length === 0) {
      $('body').removeClass('open-menu');
    }
  });

  $('.main-slider').slick({
    dots: false,
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    centerMode: false,
    prevArrow: $('.main-slider__prev'),
    nextArrow: $('.main-slider__next'),
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          dots: false,
        },
      },
    ],
  });
  $('.main-slider__prev').click(function () {
    $('.main-slider__slider').slick('slickPrev');
  });

  $('.main-slider__next').click(function () {
    $('.main-slider__slider').slick('slickNext');
  } );

  $('.gallery-block__slider-for').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    fade: true,
    adaptiveHeight: true,
    asNavFor: '.gallery-block__slider-nav'
  } );
  $('.gallery-block__slider-nav').slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    asNavFor: '.gallery-block__slider-for',
    dots: false,
    arrows: false,
    centerMode: false,
    focusOnSelect: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
    ],
    });
  $('.gallery-block__prev').click(function () {
    $('.gallery-block__slider-for').slick('slickPrev');
  });

  $('.gallery-block__next').click(function () {
    $('.gallery-block__slider-for').slick('slickNext');
  } );
});
