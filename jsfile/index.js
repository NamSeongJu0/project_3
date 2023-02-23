// Deals 타이머 부분
$(document).ready(function () {
    const countDownTimer = function (id, date) {
        var _vDate = new Date(date);
        var _second = 1000;
        var _minute = _second * 60;
        var _hour = _minute * 60;
        var _day = _hour * 24;
        var timer;

        function showRemaining() {
            var now = new Date();
            var distDt = _vDate - now;

            var days = Math.floor(distDt / _day);
            var hours = Math.floor((distDt % _day) / _hour);
            var minutes = Math.floor((distDt % _hour) / _minute);
            var seconds = Math.floor((distDt % _minute) / _second);

            document.getElementById(id).textContent = days + '일 ';
            document.getElementById(id).textContent += hours + '시간 ';
            document.getElementById(id).textContent += minutes + '분 ';
            document.getElementById(id).textContent += seconds + '초';
        }

        timer = setInterval(showRemaining, 1000);
    }

    var dateObj = new Date();
    dateObj.setDate(dateObj.getDate() + 1);


    countDownTimer('day1', '07/20/2024 00:00 AM');
    countDownTimer('day2', '03/20/2024 00:00 AM');
    countDownTimer('day3', '02/20/2024 00:00 AM');
    countDownTimer('day4', '07/20/2023 00:00 AM');
    countDownTimer('day5', '07/20/2023 00:00 AM');
    countDownTimer('day6', '01/20/2026 00:00 AM');
});



// list들 hover 효과

$(document).ready(function () {

    $('.bookinfo, .futureinfo, .saleinfo, .moodinfo, .releasesinfo').hover(function () {
        $(this).children('.img_1, .info').css({ "transition": "all 0.5s ease", "transform": "translateY(-30px)" });

        $(this).css({ "border": "1px solid #000000", "box-shadow": "4px 4px 4px #afafaf" });

    }, function () {
        $(this).children('.img_1, .info').css({ "transition": "all 0.5s ease", "transform": "translateY(0px)" });

        $(this).css({ "border": "1px solid #afafaf", "box-shadow": "none" });
    });


    // 이미지 오버 효과
    $(".futureinfo .spen1, .saleinfo .spen1, .moodinfo .spen1").hover(function () {
        $(this).children('.click').stop().animate({
            height: '100%',
            opacity: "1",
            top: "0"
        }, 300);

    }, function () {
        $(this).children('.click').stop().animate({
            height: '0%',
            opacity: "0",
            top: "-50"
        }, 300);
    });

});


// 클릭 효과
$(document).ready(function () {

    // 클릭 시 list 부분 나오는 효과
    $(".salelist, .moodlist").css("display", "none");
    $(".view li:nth-of-type(1)").css("color", "#dbc3c2")

    $('.view li').click(function () {
        var idx = $(this).index();
        $(this).css("color", "#dbc3c2").siblings().css("color", "#000000");
        $('.Featured_1 ul').eq(idx).stop().fadeIn(900).css('display', 'flex').siblings().css('display', 'none').fadeOut();
    });


    // Releases 부분
    $(".releasesbox1, .releasesbox2, .releasesbox3").css("display", "none");
    $(".R_ul li:nth-of-type(1)").css("color", "#dbc3c2");

    $('.R_ul li:nth-of-type(1)').click(function () {

        $(this).css("color", "#dbc3c2").siblings().css("color", "#000000");

        $('.releasesbox0').stop().fadeIn(900).css('display', 'flex');
        $('.releasesbox1').stop().fadeOut(900).css('display', 'none');
        $('.releasesbox2').stop().fadeOut(900).css('display', 'none');
        $('.releasesbox3').stop().fadeOut(900).css('display', 'none');

    });

    $('.R_ul li:nth-of-type(2)').click(function () {

        $(this).css("color", "#dbc3c2").siblings().css("color", "#000000");

        $('.releasesbox0').stop().fadeOut(900).css('display', 'none');
        $('.releasesbox1').stop().fadeIn(900).css('display', 'flex');
        $('.releasesbox2').stop().fadeOut(900).css('display', 'none');
        $('.releasesbox3').stop().fadeOut(900).css('display', 'none');

    });

    $('.R_ul li:nth-of-type(3)').click(function () {

        $(this).css("color", "#dbc3c2").siblings().css("color", "#000000");

        $('.releasesbox0').stop().fadeOut(900).css('display', 'none');
        $('.releasesbox1').stop().fadeOut(900).css('display', 'none');
        $('.releasesbox2').stop().fadeIn(900).css('display', 'flex');
        $('.releasesbox3').stop().fadeOut(900).css('display', 'none');

    });

    $('.R_ul li:nth-of-type(4)').click(function () {

        $(this).css("color", "#dbc3c2").siblings().css("color", "#000000");

        $('.releasesbox0').stop().fadeOut(900).css('display', 'none');
        $('.releasesbox1').stop().fadeOut(900).css('display', 'none');
        $('.releasesbox2').stop().fadeOut(900).css('display', 'none');
        $('.releasesbox3').stop().fadeIn(900).css('display', 'flex');

    });
});



// 스크롤 이벤트
$(document).ready(function () {
    $(window).scroll(function () {
        $('#Bestseller').each(function () {
            var bottom_of_element = $(this).offset().top + $(this).outerHeight() / 2;
            var bottom_of_window = $(window).scrollTop() + $(window).height();

            if (bottom_of_window > bottom_of_element) {
                $(this).animate({'opacity': '1'}, 750);
            }
        });

        $('#Featured').each(function () {
            var bottom_of_element = $(this).offset().top + $(this).outerHeight() / 2;
            var bottom_of_window = $(window).scrollTop() + $(window).height();

            if (bottom_of_window > bottom_of_element) {
                $(this).animate({'opacity': '1'}, 750);
            }
        });

        $('#Deals').each(function () {
            var bottom_of_element = $(this).offset().top + $(this).outerHeight() / 2;
            var bottom_of_window = $(window).scrollTop() + $(window).height();

            if (bottom_of_window > bottom_of_element) {
                $(this).animate({'opacity': '1'}, 750);
            }
        });

        $('#Releases').each(function () {
            var bottom_of_element = $(this).offset().top + $(this).outerHeight() / 2;
            var bottom_of_window = $(window).scrollTop() + $(window).height();

            if (bottom_of_window > bottom_of_element) {
                $(this).animate({'opacity': '1'}, 750);
            }
        });

        $('#Music').each(function () {
            var bottom_of_element = $(this).offset().top + $(this).outerHeight() / 2;
            var bottom_of_window = $(window).scrollTop() + $(window).height();

            if (bottom_of_window > bottom_of_element) {
                $(this).animate({'opacity': '1'}, 750);
            }
        });

        $('#Favorite').each(function () {
            var bottom_of_element = $(this).offset().top + $(this).outerHeight() / 2;
            var bottom_of_window = $(window).scrollTop() + $(window).height();

            if (bottom_of_window > bottom_of_element) {
                $(this).animate({'opacity': '1'}, 750);
            }
        });
    });
});

