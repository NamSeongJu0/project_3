// swiper1
$(document).ready(function() {

    // mySwiper1 멈춤
    $('.swiper-slide').hover(function() {
        swiper.autoplay.stop();
    }, function() {
        swiper.autoplay.start();
    });

    var swiper = new Swiper(".mySwiper1", {
        spaceBetween: 30,
        effect: "fade",

        fadeEffect: {
            crossFade: true,
        },

        observer: true,
        observeParents: true,
  
        loop: true,
  
        autoplay: {
          delay: 2500,
          disableOnInteraction: false,
        },
        
      });

});



// swiper2
$(document).ready(function() {

    // swiper1
    var swiper = new Swiper(".mySwiper2", {
        slidesPerView: 2,
        spaceBetween: 10,

        loop: true,

        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
    });
});



// swiper3
$(document).ready(function() {

    var swiper = new Swiper(".mySwiper3", {

        effect: "coverflow",
        grabCursor: true,
        centeredSlides: true,
        slidesPerView: "auto",

        coverflowEffect: {
            rotate: 50,
            stretch: 0,
            depth: 100,
            modifier: 1,
            slideShadows: true,
        },

        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },
    });
});



// swiper4
$(document).ready(function() {

    var swiper = new Swiper(".mySwiper4", {


        grabCursor: true,
        slidesPerView: 5,
        spaceBetween: 30,
        freeMode: true,

        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },

    });
});