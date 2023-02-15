// swiper1
$(document).ready(function () {

    // swiper1
    var swiper = new Swiper(".mySwiper1", {

        spaceBetween: 30,
        effect: "fade",

        loop: true,

        autoplay: {
            delay: 1500,
            disableOnInteraction: false,
        },


        // navigation: {
        //   nextEl: ".swiper-button-next",
        //   prevEl: ".swiper-button-prev",
        // },

        // pagination: {
        //   el: ".swiper-pagination",
        //   clickable: true,
        // },
    });
});



// swiper2
$(document).ready(function () {

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
$(document).ready(function () {

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
$(document).ready(function () {

    var swiper = new Swiper(".mySwiper4", {


        grabCursor: true,
        slidesPerView: 5,
        spaceBetween: 30,
        freeMode: true,

        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },

        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },

    });
});