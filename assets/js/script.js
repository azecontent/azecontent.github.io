$(document).ready(function () {

  $(window).scroll(function () {
    if (this.scrollY > 500) {
      $(".scroll-up-btn").addClass("show");
    } else {
      $(".scroll-up-btn").removeClass("show");
    }
  });

  // slide-up script
  $(".scroll-up-btn").click(function () {
    $("html").animate({ scrollTop: 0 });
  });

  // toggle menu/navbar script
  $(".menu-btn").click(function () {
    $(".menu").toggleClass("active");
    $(".menu-btn i").toggleClass("active");
  });

  // animation 
  const sr = ScrollReveal({
    origin: "bottom",
    distance: "120px",
    duration: 2000,
    reset: true,
  });

  sr.reveal(".main-title", { delay: 700, opacity: 0.5 });
  sr.reveal(".home-content", { delay: 700 });

  
  // selected category 
  $(".option").click(function () {
    if (!$(this).hasClass("selected")) {
      $(this).toggleClass("selected");
    }
    else {
      $(this).removeClass("selected");
    }
  });

});
