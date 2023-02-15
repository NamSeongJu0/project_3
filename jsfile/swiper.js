$(document).ready(function() {

    // swiper1
    var swiper = new Swiper(".mySwiper", {
        slidesPerView: 2,
        spaceBetween: 10,

        // autoplay: {
        //     delay: 2500,
        //     disableOnInteraction: false,
        // },

        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
    });



    // swiper2
    var swiper = new Swiper(".mySwiper1", {
        effect: "coverflow",
        grabCursor: true,
        centeredSlides: true,

        spaceBetween: 15,

        slideToClickedSlide : true,

        coverflowEffect: {
        //   rotate: 50,
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

})