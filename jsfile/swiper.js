// swiper1
$(document).ready(function() {

    // $('slide_b1:nth-of-type(2), slide_b1:nth-of-type(3), slide_b1:nth-of-type(4)').css("display", "none");

    $("slide_b1").mouseenter(function() {
        $(this).swiper().stop();
    })

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