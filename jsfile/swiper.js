$(document).ready(function() {
    
    var swiper = new Swiper(".mySwiper", {

        spaceBetween: 30,
        centeredSlides: false,
        slidesPerView: 1,

        loop: true,
        loopAdditionalSlides: 1,

        autoplay: {
          delay: 2500,
          disableOnInteraction: false,
        },

        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },

        // navigation: {
        //   nextEl: ".next",
        //   prevEl: ".prev",
        // },
      });
});
