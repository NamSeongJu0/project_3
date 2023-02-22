$(document).ready(function () {

    // BestSelling 부분
    $.ajax({
        method: "GET",
        url: "https://dapi.kakao.com/v3/search/book?target=title",
        data: { query: "소설" },
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


        $('.bookinfo').hover(function () {
            $(this).children('.img_1, .info').css({ "transition": "all 0.5s ease", "transform": "translateY(-30px)" });
    
            $(this).css({ "border": "1px solid #000000", "box-shadow": "4px 4px 4px #afafaf" });
    
        }, function () {
            $(this).children('.img_1, .info').css({ "transition": "all 0.5s ease", "transform": "translateY(0px)" });
    
            $(this).css({ "border": "1px solid #afafaf", "box-shadow": "none" });
        });
});