$(document).ready(function () {
  $(window).scroll(function () {
    // Sticky navbar on scroll script
    if (this.scrollY > 20) {
      $(".navbar").addClass("sticky");
    } else {
      $(".navbar").removeClass("sticky");
    }

    // Scroll-up button show/hide script
    if (this.scrollY > 500) {
      $(".scroll-up-btn").addClass("show");
    } else {
      $(".scroll-up-btn").removeClass("show");
    }
  });

  // Slide-up script
  $(".scroll-up-btn").click(function () {
    $("html").animate({ scrollTop: 0 });
    // Removing smooth scroll on slide-up button click
    $("html").css("scrollBehavior", "auto");
  });

  $(".navbar .menu li a").click(function () {
    // Applying smooth scroll again on menu items click
    $("html").css("scrollBehavior", "smooth");
  });

  $(".menu-btn").click(function () {
    $(".navbar .menu").toggleClass("active");
    $(".menu-btn i").toggleClass("active");
  });

  var typed = new Typed(".typing", {
    strings: ["BSIT Student", "YouTuber", "Designer", "Editor"],
    typeSpeed: 120,
    backSpeed: 60,
    loop: true,
  });

  var typed = new Typed(".typing-2", {
    strings: ["BSIT Student", "YouTuber", "Designer", "Editor"],
    typeSpeed: 120,
    backSpeed: 60,
    loop: true,
  });

  // Owl Carousel script
  $(".carousel").owlCarousel({
    margin: 20,
    loop: true,
    autoplay: true,
    autoplayTimeout: 2000, // Note the corrected property name
    autoplayHoverPause: true,
    responsive: {
      0: {
        items: 1,
        nav: false,
      },
      600: {
        items: 2,
        nav: false,
      },
      1000: {
        items: 3,
        nav: false,
      },
    },
  });
});
