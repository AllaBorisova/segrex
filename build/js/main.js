jQuery(document).ready(function ($) {
  //mobile menu
  $(document).mouseup(function (e) {
    const container = $('.header-new-popup');
    if (!container.is(e.target) && container.has(e.target).length === 0) {
      $('body').removeClass('open-menu');
    }
  });
  $('.hamburger').click(function () {
    if ($('.hamburger').hasClass('is-active')) {
      $('.hamburger').removeClass('is-active');
      $('body').removeClass('open-menu');
    } else {
      $('.hamburger').addClass('is-active');
      $('body').addClass('open-menu');
    }
  });

  // $('.header-popup__close').click(function () {
  //   $('.hamburger').toggleClass('is-active');
  //   $('body').toggleClass('open-menu');
  // });

  // $('.main-slider').slick({
  //   dots: false,
  //   infinite: true,
  //   speed: 300,
  //   slidesToShow: 1,
  //   centerMode: false,
  //   prevArrow: $('.main-slider__prev'),
  //   nextArrow: $('.main-slider__next'),
  //   responsive: [
  //     {
  //       breakpoint: 1024,
  //       settings: {
  //         dots: false,
  //       },
  //     },
  //   ],
  // });
  // $('.main-slider__prev').click(function () {
  //   $('.main-slider__slider').slick('slickPrev');
  // });

  // $('.main-slider__next').click(function () {
  //   $('.main-slider__slider').slick('slickNext');
  // } );

  $('.product-detail-page-slider').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    fade: true,
    adaptiveHeight: false,
    asNavFor: '.product-detail-page-thumbs'
  } );
  $('.product-detail-page-thumbs').slick({
    slidesToShow: 6,
    slidesToScroll: 1,
    asNavFor: '.product-detail-page-slider',
    arrows: false,
    dots: false,
    centerMode: false,
    infinite: true,
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
  // $('.gallery-block__prev').click(function () {
  //   $('.gallery-block__slider-for').slick('slickPrev');
  // });

  // $('.gallery-block__next').click(function () {
  //   $('.gallery-block__slider-for').slick('slickNext');
  // } );
});
