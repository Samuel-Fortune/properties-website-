$(document).ready(function () {
  $(window).scroll(function () {
    let __headerPosition =
      $("header").position().top + $("header .main_header").height();

    if ($(window).scrollTop() > __headerPosition) {
      // show fixed header
      $("header .main_header").addClass("az_fixed");
    } else {
      $("header .main_header").removeClass("az_fixed");
    }
  });

  // Add Menu Click Event
  $(".show_aside").click(function (e) {
    e.preventDefault();
    e.stopPropagation();
  });
});

// Glider JS SETUP
window.addEventListener("load", function () {
  let __gliderDOM = document.querySelectorAll(".carousel__lista");
  let __dots = document.querySelectorAll(".carousel__indicadores");

  let __prevArrow = document.querySelectorAll(".carousel__anterior");
  let __nextArrow = document.querySelectorAll(".carousel__siguiente");

  __gliderDOM.forEach(function (__element, __index) {
    new Glider(__element, {
      slidesToShow: 1,
      slidesToScroll: 1,
      draggable: true,
      dots: __dots[__index],
      arrows: {
        prev: __prevArrow[__index],
        next: __nextArrow[__index]
      },
      responsive: [
        {
          // screens greater than >= 775px
          breakpoint: 450,
          settings: {
            // Set to `auto` and provide item width to adjust to viewport
            slidesToShow: 2,
            slidesToScroll: 2
          }
        },
        {
          // screens greater than >= 1024px
          breakpoint: 800,
          settings: {
            slidesToShow: 4,
            slidesToScroll: 4
          }
        }
      ]
    });
  });
});
