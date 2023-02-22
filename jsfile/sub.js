$(document).ready(function() {
    // BestSelling 부분
    $.ajax({
        method: "GET",
        url: "https://dapi.kakao.com/v3/search/book?target=title",
        data: { query: "세상의 마지막 기차역" },
        headers: { Authorization: "KakaoAK 6f9bb4da749b9b559e49e18decbe669a" }
    })

        .done(function (msg) {

            var lis = document.getElementsByClassName("photo_book");

            for (var i = 0; i < lis.length; i++) {

                var str = msg.documents[i].title;
                var str2 = str.substring(0, 20);

                var str1 = msg.documents[i].contents;
                var str3 = str1.substring(0, 176);

                $(".photo_book .subinfo").eq(i).append("<br>" + "<p>" + "정가 : " + msg.documents[i].price + "원" + "</p>").append("<p>" + "판매가 : " + msg.documents[i].sale_price + "원" + "</p>").prepend("<h2>" + msg.documents[i].authors + "</h2>" + "<br>").prepend("<h1>" + str2 + "</h1>");

                $(".img_text .publisher").append("<h4>" + msg.documents[i].publisher + "</h4>");


                $(".sb_box .story").eq(i).append("<p>" + str3 + "</p>");

            }

        });
});



// +, - 클릭 시 효과
$(document).ready(function() {
    $(".btn").click(function() {
        $(this).css("transform", "scale(1.2)");
    });
});


// Social.text 가져오기
$(document).ready(function() {
    $.get("sub_text/social.txt", function (data) {
        $(".social").html(data);
    });


    $.get("sub_text/reviews.txt", function (data) {
        $(".reviews_1").html(data);
    });
});



// .re_input 부분
$(function() {

    $(".re_star1").hover(function(){

        $(".re_star1 > img").attr('src', '../subimg/h_star.png');

        $(this).attr('src', '../subimg/y_star.png');

        $(this).prevUntil().attr('src', '../subimg/y_star.png');

    }); 
    
    $(".re_star1").click(function() {

        $(".re_star1 > img").attr('src', '../subimg/h_star.png');

        $(this).attr('src', '../subimg/y_star.png');

        $(this).prevUntil().attr('src', '../subimg/y_star.png');

    });

});






