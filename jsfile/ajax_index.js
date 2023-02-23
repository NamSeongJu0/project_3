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
    search = ['역사', '과학', '사랑', '경제'];

    for (var i = 0; i < search.length; i++) {
        $.ajax({
            method: "GET",
            url: "https://dapi.kakao.com/v3/search/book?target=title",
            data: { query: search[i], size: 11 },
            async: false,
            headers: { Authorization: "KakaoAK 6f9bb4da749b9b559e49e18decbe669a" }
        })

            .done(function (msg) {

                $(".R_img").eq(i).append('<a href="#">' + "<img src = '" + msg.documents[10].thumbnail + "'/>" + "</a>");
                var lis = $(".releasesbox" + i + ' .releasesinfo');

                for (var j = 0; j < lis.length; j++) {

                    var str = msg.documents[j].title;
                    var str2 = str.substring(0, 20);

                    $(".releasesbox" + i + " .releasesinfo .img_1").eq(j).append('<a href="#">' + "<img src = '" + msg.documents[j].thumbnail + "'/>" + "</a>");

                    $(".releasesbox" + i + " .releasesinfo .info").eq(j).append("<h4>" + str2 + "</h4>").append("<span>" + msg.documents[j].authors + "</span>").append("<p>" + "정가 : " + msg.documents[j].price + "원" + "</p>").append("<p>" + msg.documents[j].publisher + "</p>");


                    $(".releasesbox" + i + " .img").eq(j).find(".spen1").append("ADD TO CART");

                    $(".releasesbox" + i + " .img").eq(j).find(".img_2").append('<img src = "indeximg/my2.png" />', '<img src = "indeximg/my5.png"/>');

                }
            });
    }



    // mood 부분
    $.ajax({
        method: "GET",
        url: "https://dapi.kakao.com/v3/search/book?target=title",
        data: { query: "음악" },
        headers: { Authorization: "KakaoAK 6f9bb4da749b9b559e49e18decbe669a" }
    })

        .done(function (msg) {
            var lis = document.getElementsByClassName("m_list");

            for (var i = 0; i < lis.length; i++) {

                var str = msg.documents[i].title;
                var str2 = str.substring(0, 20);

                $(".m_list .m_img").eq(i).append('<a href="#">' + "<img src = '" + msg.documents[i].thumbnail + "'/>" + "</a>");

                $(".m_list .m_info").eq(i).append("<h4>" + str2 + "</h4>").append("<span>" + msg.documents[i].authors + "</span>").append("<p>" + "판매가 : " + msg.documents[i].sale_price + "원" + "</p>").append("<p>" + msg.documents[i].publisher + "</p>");


                $(".m_list").eq(i).find(".spen1").append('<img src = "indeximg/my4.png" />');

                $(".m_list").eq(i).find(".img_2").append('<img src = "indeximg/my2.png" />', '<img src = "indeximg/my5.png"/>');

            }

        });
});