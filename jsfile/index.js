$(document).ready(function() {

    // BestSelling 부분
    $.ajax({
        method: "GET",    
        url: "https://dapi.kakao.com/v3/search/book?target=title",    
        data: {query: "여행"},    
        headers: {Authorization: "KakaoAK 6f9bb4da749b9b559e49e18decbe669a"}
    })
    
    .done(function(msg) {
        console.log(msg)
        var lis = document.getElementsByClassName("bookinfo");
    
        for(var i = 0; i < lis.length; i++) {

            var str = msg.documents[i].title;
            var str2 = str.substring(0, 20);
    
            $(".bookinfo .img_1").eq(i).append('<a href="#">' + "<img src = '" + msg.documents[i].thumbnail + "'/>" + "</a>");
    
            $(".bookinfo .info").eq(i).append("<h4>" + str2 + "</h4>").append("<span>" + msg.documents[i].authors + "</span>").append("<p>" + "정가 : " + msg.documents[i].price + "원" +  "</p>").append("<p>" + msg.documents[i].publisher + "</p>");
    
    
            $(".bookinfo").eq(i).find(".spen1").append("ADD TO CART");
            
            $(".bookinfo").eq(i).find(".img_2").append('<img src = "indeximg/my2.png" />', '<img src = "indeximg/my5.png"/>');
    
        }

    });



    // view 부분..

    $.ajax({
        method: "GET",    
        url: "https://dapi.kakao.com/v3/search/book?target=title",    
        data: {query: "미래"},    
        headers: {Authorization: "KakaoAK 6f9bb4da749b9b559e49e18decbe669a"}
    })
    
    .done(function(msg) {
        var lis = document.getElementsByClassName("futureinfo");
    
        for(var i = 0; i < lis.length; i++) {

            var str = msg.documents[i].title;
            var str2 = str.substring(0, 20);
    
            $(".futureinfo .img_1").eq(i).append('<a href="#">' + "<img src = '" + msg.documents[i].thumbnail + "'/>" + "</a>");
    
            $(".futureinfo .info").eq(i).append("<h4>" + str2 + "</h4>").append("<span>" + msg.documents[i].authors + "</span>").append("<p>" + "정가 : "+ msg.documents[i].price + "원" +  "</p>").append("<p>" + msg.documents[i].publisher + "</p>");
    
    
            $(".futureinfo").eq(i).find(".spen1").append('<img src = "indeximg/my4.png" />');
            
            $(".futureinfo").eq(i).find(".img_2").append('<img src = "indeximg/my2.png" />', '<img src = "indeximg/my5.png"/>');
    
        }

    });


    // sale 부분
    $.ajax({
        method: "GET",    
        url: "https://dapi.kakao.com/v3/search/book?target=title",    
        data: {query: "세일"},    
        headers: {Authorization: "KakaoAK 6f9bb4da749b9b559e49e18decbe669a"}
    })
    
    .done(function(msg) {
        var lis = document.getElementsByClassName("saleinfo");
    
        for(var i = 0; i < lis.length; i++) {

            var str = msg.documents[i].title;
            var str2 = str.substring(0, 20);
    
            $(".saleinfo .img_1").eq(i).append('<a href="#">' + "<img src = '" + msg.documents[i].thumbnail + "'/>" + "</a>");
    
            $(".saleinfo .info").eq(i).append("<h4>" + str2 + "</h4>").append("<span>" + msg.documents[i].authors + "</span>").append("<p>" + "판매가 : "+ msg.documents[i].sale_price + "원" +  "</p>").append("<p>" + msg.documents[i].publisher + "</p>");
    
    
            $(".saleinfo").eq(i).find(".spen1").append('<img src = "indeximg/my4.png" />');
            
            $(".saleinfo").eq(i).find(".img_2").append('<img src = "indeximg/my2.png" />', '<img src = "indeximg/my5.png"/>');
    
        }

    });


     // mood 부분
     $.ajax({
        method: "GET",    
        url: "https://dapi.kakao.com/v3/search/book?target=title",    
        data: {query: "기분"},    
        headers: {Authorization: "KakaoAK 6f9bb4da749b9b559e49e18decbe669a"}
    })
    
    .done(function(msg) {
        var lis = document.getElementsByClassName("moodinfo");
    
        for(var i = 0; i < lis.length; i++) {

            var str = msg.documents[i].title;
            var str2 = str.substring(0, 20);
    
            $(".moodinfo .img_1").eq(i).append('<a href="#">' + "<img src = '" + msg.documents[i].thumbnail + "'/>" + "</a>");
    
            $(".moodinfo .info").eq(i).append("<h4>" + str2 + "</h4>").append("<span>" + msg.documents[i].authors + "</span>").append("<p>" + "판매가 : "+ msg.documents[i].sale_price + "원" +  "</p>").append("<p>" + msg.documents[i].publisher + "</p>");
    
    
            $(".moodinfo").eq(i).find(".spen1").append('<img src = "indeximg/my4.png" />');
            
            $(".moodinfo").eq(i).find(".img_2").append('<img src = "indeximg/my2.png" />', '<img src = "indeximg/my5.png"/>');
    
        }

    });


    // Deals 부분
    $.ajax({
        method: "GET",    
        url: "https://dapi.kakao.com/v3/search/book?target=title",    
        data: {query: "행복"},    
        headers: {Authorization: "KakaoAK 6f9bb4da749b9b559e49e18decbe669a"}
    })
    
    .done(function(msg) {
        var lis = document.getElementsByClassName("list_box");
    
        for(var i = 0; i < lis.length; i++) {

            var str = msg.documents[i].title;
            var str2 = str.substring(0, 20);
    
            $(".list_box .list_img").eq(i).append('<a href="#">' + "<img src = '" + msg.documents[i].thumbnail + "'/>" + "</a>");
    
            $(".list_box .list_info").eq(i).append("<h4>" + str2 + "</h4>").append("<span>" + msg.documents[i].authors + "</span>").append("<p>" + "판매가 : "+ msg.documents[i].sale_price + "원" +  "</p>").append("<p>" + msg.documents[i].publisher + "</p>");
    
        }

    });
});



// list들 hover 효과

$(document).ready(function(){

    $('.bookinfo, .futureinfo, .saleinfo, .moodinfo').hover(function() {
        $(this).children('.img_1, .info').css({"transition": "all 0.5s ease", "transform": "translateY(-30px)"});
        
        $(this).css({"border": "1px solid #000000", "box-shadow": "4px 4px 4px #afafaf"});

    }, function() {
        $(this).children('.img_1, .info').css({"transition": "all 0.5s ease", "transform": "translateY(0px)"});
        
        $(this).css({"border": "1px solid #afafaf", "box-shadow": "none"});    
    });

    
    // 이미지 오버 효과
    $(".futureinfo .spen1, .saleinfo .spen1, .moodinfo .spen1").hover(function() {
        $(this).children('.click').stop().animate({
            height: '100%',
            opacity: "1",
            top: "0"
        }, 300);

    }, function() {
        $(this).children('.click').stop().animate({
            height: '0%',
            opacity: "0",
            top: "-50"
        }, 300);
    });

});


// 클릭 효과
$(document).ready(function() {

    // 클릭 시 list 부분 나오는 효과
    $(".salelist, .moodlist").css("display", "none");
    $(".view li:nth-of-type(1)").css("color", "#dbc3c2")

    $('.view li:nth-of-type(1)').click(function(){
        $(this).css("color", "#dbc3c2");
        $('.view li:nth-of-type(2), .view li:nth-of-type(3)').css("color", "#000000");

        $('.futurelist').stop().fadeIn(900).css('display', 'flex');
        $('.salelist').css('display', 'none').fadeOut();
        $('.moodlist').css('display', 'none').fadeOut();
    });

    $('.view li:nth-of-type(2)').click(function(){
        $(this).css("color", "#dbc3c2");
        $('.view li:nth-of-type(1), .view li:nth-of-type(3)').css("color", "#000000");

        $('.futurelist').css('display', 'none');
        $('.salelist').stop().fadeIn(900).css('display', 'flex');
        $('.moodlist').css('display', 'none');
    });

    $('.view li:nth-of-type(3)').click(function(){
        $(this).css("color", "#dbc3c2");
        $('.view li:nth-of-type(1), .view li:nth-of-type(2)').css("color", "#000000");

        $('.futurelist').css('display', 'none');
        $('.salelist').css('display', 'none');
        $('.moodlist').stop().fadeIn(900).css('display', 'flex');
    });

    // $('.view li').hover(function() {
    //     $(this).css({"color": "#dbc3c2", "transition": "all 0.5s ease", "cursor": "pointer"});
    // }, function() {
    //     $(this).css({"color": "#000000", "transition": "none", "cursor": "pointer"});
    // });
})

