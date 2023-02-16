$(document).ready(function() {
    // BestSelling 부분
    $.ajax({
        method: "GET",
        url: "https://dapi.kakao.com/v3/search/book?target=title",
        data: { query: "천년 여우 여우비" },
        headers: { Authorization: "KakaoAK 6f9bb4da749b9b559e49e18decbe669a" }
    })

        .done(function (msg) {

            var lis = document.getElementsByClassName("fox_book");

            for (var i = 0; i < lis.length; i++) {

                var str = msg.documents[i].title;
                var str2 = str.substring(0, 20);

                $(".fox_book .fox_img").eq(i).append('<a href="#">' + "<img src = '" + msg.documents[i].thumbnail + "'/>" + "</a>");

                $(".fox_book .subinfo").eq(i).prepend("<h1>" + str2 + "</h1>")

                .append("<p>" + "정가 : " + msg.documents[i].price + "원" + "</p>")
                // .append("<p>" + msg.documents[i].publisher + "</p>");


                $(".bookinfo").eq(i).find(".spen1").append("ADD TO CART");

                $(".bookinfo").eq(i).find(".img_2").append('<img src = "indeximg/my2.png" />', '<img src = "indeximg/my5.png"/>');

            }

        });
});