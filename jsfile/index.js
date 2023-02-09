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
    
            $(".bookinfo .img_1").eq(i).append("<img src = '" + msg.documents[i].thumbnail + "'/>");
    
            $(".bookinfo .info").eq(i).append("<h4>" + msg.documents[i].title + "</h4>").append("<span>" + msg.documents[i].authors + "</span>").append("<p>" + msg.documents[i].price + "원" +  "</p>").append("<p>" + msg.documents[i].status + "</p>");
    
    
            $(".bookinfo").eq(i).find(".span1").append("<span>" + "ADD TO CART" + "</span>");
            
            $(".bookinfo").eq(i).find(".img_2").append('<img src = "indeximg/my2.png" />', '<img src = "indeximg/my5.png"/>');
    
        }

    });



    // view 부분..

    $.ajax({
        method: "GET",    
        url: "https://dapi.kakao.com/v3/search/book?target=title",    
        data: {query: "요리"},    
        headers: {Authorization: "KakaoAK 6f9bb4da749b9b559e49e18decbe669a"}
    })
    
    .done(function(msg) {
        console.log(msg)
        var lis = document.getElementsByClassName("viewinfo");
    
        for(var i = 0; i < lis.length; i++) {
    
            $(".viewinfo").eq(i).append("<img src = '" + msg.documents[i].thumbnail + "'/>");
    
            $(".viewinfo").eq(i).append("<h4>" + msg.documents[i].title + "</h4>").append("<span>" + msg.documents[i].authors + "</span>");
    
    
            var str = msg.documents[i].contents;
            var str2 = str.substring(2, 55);
    
    
            $(".viewinfo").eq(i).append("<p>" + str2 + "</p>");
            $(".viewinfo").eq(i).find(".img").append('<img src = "indeximg/my2.png" />', '<img src = "indeximg/my5.png"/>');
    
        }

    });
});
