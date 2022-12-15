//Check if desired element is in the viewport
$.fn.isInViewport = function () {
  var elementTop = $(this).offset().top;
  var elementBottom = elementTop + $(this).outerHeight();

  var viewportTop = $(window).scrollTop();
  var viewportBottom = viewportTop + $(window).height();

  return elementBottom > viewportTop && elementTop < viewportBottom;
};

//Fade in and slide up
const fadeInSlideUp = (elem, delay = 0, viewportRequired = true) => {
  if ($(elem).isInViewport()) {
    $(elem)
      .delay(delay)
      .animate(
        { opacity: 1, top: "0px" },
        { duration: 500, queue: false },
        "easeIn"
      );
  } else {
    $(elem).animate(
      { opacity: 0, display: "none", top: "100px" },
      { duration: 500, queue: false },
      "easeOut"
    );
  }
};

//Fade in hero text
$(function () {
  $(".hero-title").animate({ opacity: 1 }, { duration: 1600, queue: false });
  $(".hero-title").animate(
    { "margin-top": "0px" },
    { duration: 1200, queue: false }
  );
});

//Handle count up
$(".hero-info-number").each(function () {
  $(this)
    .prop("Counter", 0)
    .animate(
      {
        Counter: $(this).text(),
      },
      {
        duration: 2000,
        easing: "swing",
        step: function (now) {
          $(this).text(Math.ceil(now));
        },
      }
    );
});

//Handle width increase on scroll
const widthScrollIncrease = (elem, width = "100%") => {
  if ($(elem).isInViewport()) {
    $(elem).animate(
      { width: width },
      { duration: 800, queue: false },
      "easeIn"
    );
  } else {
    $(elem).animate({ width: "0%" }, { duration: 500, queue: false }, "easeIn");
  }
};

//Makes modal active.
$("#donate-btn").on("click", function () {
  $("#modal").addClass("modal-active");
});

//Close modal by clicking on overlay
$("#modal").on("click", function () {
  $("#modal").removeClass("modal-active");
});

//Hero button click
$("#hero-btn").on("click", function () {
  $(".section-1-container")[0].scrollIntoView({
    behavior: "smooth",
  });
});

//Github button link
$("#github-btn").on("click", function () {
  window.location = "https://github.com/samukelolukhele";
});

//Portfolio button link
$("#portfolio-btn").on("click", function () {
  window.location = "https://samukelol.vercel.app/";
});

//Handling animations on scroll
$(window).on("resize scroll", function () {
  widthScrollIncrease(".title-separator", 300);
  fadeInSlideUp("#section-2-text-container", 2000);
  fadeInSlideUp(".title-container");

  //Handling all separator width aninmations.
  $(".separator").each(function (i, elem) {
    widthScrollIncrease(this, 250);
  });
});
