$(document).ready(function () {

    // BestSelling 부분
    $.ajax({
        method: "GET",
        url: "https://dapi.kakao.com/v3/search/book?target=title",
        data: { query: "여행" },
        headers: { Authorization: "KakaoAK 6f9bb4da749b9b559e49e18decbe669a" }
    })

        .done(function (msg) {

            var lis = document.getElementsByClassName("bookinfo");

            for (var i = 0; i < lis.length; i++) {

                var str = msg.documents[i].title;
                var str2 = str.substring(0, 20);

                $(".bookinfo .img_1").eq(i).append('<a href="#">' + "<img src = '" + msg.documents[i].thumbnail + "'/>" + "</a>");

                $(".bookinfo .info").eq(i).append("<h4>" + str2 + "</h4>").append("<span>" + msg.documents[i].authors + "</span>").append("<p>" + "정가 : " + msg.documents[i].price + "원" + "</p>").append("<p>" + msg.documents[i].publisher + "</p>");


                $(".bookinfo").eq(i).find(".spen1").append("ADD TO CART");

                $(".bookinfo").eq(i).find(".img_2").append('<img src = "indeximg/my2.png" />', '<img src = "indeximg/my5.png"/>');

            }

        });



    // view 부분..

    $.ajax({
        method: "GET",
        url: "https://dapi.kakao.com/v3/search/book?target=title",
        data: { query: "미래" },
        headers: { Authorization: "KakaoAK 6f9bb4da749b9b559e49e18decbe669a" }
    })

        .done(function (msg) {
            var lis = document.getElementsByClassName("futureinfo");

            for (var i = 0; i < lis.length; i++) {

                var str = msg.documents[i].title;
                var str2 = str.substring(0, 20);

                $(".futureinfo .img_1").eq(i).append('<a href="#">' + "<img src = '" + msg.documents[i].thumbnail + "'/>" + "</a>");

                $(".futureinfo .info").eq(i).append("<h4>" + str2 + "</h4>").append("<span>" + msg.documents[i].authors + "</span>").append("<p>" + "정가 : " + msg.documents[i].price + "원" + "</p>").append("<p>" + msg.documents[i].publisher + "</p>");


                $(".futureinfo").eq(i).find(".spen1").append('<img src = "indeximg/my4.png" />');

                $(".futureinfo").eq(i).find(".img_2").append('<img src = "indeximg/my2.png" />', '<img src = "indeximg/my5.png"/>');

            }

        });


    // sale 부분
    $.ajax({
        method: "GET",
        url: "https://dapi.kakao.com/v3/search/book?target=title",
        data: { query: "세일" },
        headers: { Authorization: "KakaoAK 6f9bb4da749b9b559e49e18decbe669a" }
    })

        .done(function (msg) {
            var lis = document.getElementsByClassName("saleinfo");

            for (var i = 0; i < lis.length; i++) {

                var str = msg.documents[i].title;
                var str2 = str.substring(0, 20);

                $(".saleinfo .img_1").eq(i).append('<a href="#">' + "<img src = '" + msg.documents[i].thumbnail + "'/>" + "</a>");

                $(".saleinfo .info").eq(i).append("<h4>" + str2 + "</h4>").append("<span>" + msg.documents[i].authors + "</span>").append("<p>" + "판매가 : " + msg.documents[i].sale_price + "원" + "</p>").append("<p>" + msg.documents[i].publisher + "</p>");


                $(".saleinfo").eq(i).find(".spen1").append('<img src = "indeximg/my4.png" />');

                $(".saleinfo").eq(i).find(".img_2").append('<img src = "indeximg/my2.png" />', '<img src = "indeximg/my5.png"/>');

            }

        });


    // mood 부분
    $.ajax({
        method: "GET",
        url: "https://dapi.kakao.com/v3/search/book?target=title",
        data: { query: "기분" },
        headers: { Authorization: "KakaoAK 6f9bb4da749b9b559e49e18decbe669a" }
    })

        .done(function (msg) {
            var lis = document.getElementsByClassName("moodinfo");

            for (var i = 0; i < lis.length; i++) {

                var str = msg.documents[i].title;
                var str2 = str.substring(0, 20);

                $(".moodinfo .img_1").eq(i).append('<a href="#">' + "<img src = '" + msg.documents[i].thumbnail + "'/>" + "</a>");

                $(".moodinfo .info").eq(i).append("<h4>" + str2 + "</h4>").append("<span>" + msg.documents[i].authors + "</span>").append("<p>" + "판매가 : " + msg.documents[i].sale_price + "원" + "</p>").append("<p>" + msg.documents[i].publisher + "</p>");


                $(".moodinfo").eq(i).find(".spen1").append('<img src = "indeximg/my4.png" />');

                $(".moodinfo").eq(i).find(".img_2").append('<img src = "indeximg/my2.png" />', '<img src = "indeximg/my5.png"/>');

            }

        });


    // Deals 부분
    $.ajax({
        method: "GET",
        url: "https://dapi.kakao.com/v3/search/book?target=title",
        data: { query: "행복" },
        headers: { Authorization: "KakaoAK 6f9bb4da749b9b559e49e18decbe669a" }
    })

        .done(function (msg) {
            var lis = document.getElementsByClassName("list_box");

            for (var i = 0; i < lis.length; i++) {

                var str = msg.documents[i].title;
                var str2 = str.substring(0, 20);

                $(".list_box .list_img").eq(i).append('<a href="#">' + "<img src = '" + msg.documents[i].thumbnail + "'/>" + "</a>");

                $(".list_box .list_info").eq(i).prepend("<p>" + "세일 마감까지 남은 시간" + "</p>").prepend("<p>" + "판매가 : " + msg.documents[i].sale_price + "원" + "</p>").prepend("<span>" + msg.documents[i].authors + "</span>").prepend("<h4>" + str2 + "</h4>").prepend("<p>" + msg.documents[i].publisher + "</p>");
            }
        });



    // Releases 부분

    var search;
    search = ['역사', '과학', '사랑', '여행'];

    for(var i = 0; i < search.length; i++) {
        $.ajax({
            method: "GET",
            url: "https://dapi.kakao.com/v3/search/book?target=title",
            data: { query: search[i], size: 11},
            async: false,
            headers: { Authorization: "KakaoAK 6f9bb4da749b9b559e49e18decbe669a" }
        })

        .done(function (msg) {
            
            $(".R_img").eq(i).append('<a href="#">' + "<img src = '" + msg.documents[10].thumbnail + "'/>" + "</a>");
            var lis = $(".releasesbox"+i +' .releasesinfo' );
console.log(lis);
            for (var j = 0; j < lis.length; j++) {

                var str = msg.documents[j].title;
                var str2 = str.substring(0, 20);

                $(".releasesbox"+i +" .releasesinfo .img_1").eq(j).append('<a href="#">' + "<img src = '" + msg.documents[j].thumbnail + "'/>" + "</a>");

                $(".releasesbox"+i +" .releasesinfo .info").eq(j).append("<h4>" + str2 + "</h4>").append("<span>" + msg.documents[j].authors + "</span>").append("<p>" + "정가 : " + msg.documents[j].price + "원" + "</p>").append("<p>" + msg.documents[j].publisher + "</p>");


                $(".releasesbox"+i +" .img").eq(j).find(".spen1").append("ADD TO CART");

                $(".releasesbox"+i +" .img").eq(j).find(".img_2").append('<img src = "indeximg/my2.png" />', '<img src = "indeximg/my5.png"/>');

            }
        });
    }
});



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

    $('.R_ul li').click(function () {
        var idx = $(this).index();
        $(this).css("color", "#dbc3c2").siblings().css("color", "#000000");
        $('.releases .releasesbox').eq(idx).stop().fadeIn(900).css('display', 'flex').siblings().css('display', 'none').fadeOut();
    });
});

