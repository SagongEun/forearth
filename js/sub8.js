$(function(){
    $(".button").click(function(){
        $(".imgClass").attr("src", "./images/page_product1-1.png");
    });
    $(".button1").click(function(){
        $(".imgClass").attr("src", "./images/page_product2-1.png");
    });
    $(".button2").click(function(){
        $(".imgClass").attr("src", "./images/page_product3-1.png");
    });
    $(".button3").click(function(){
        $(".imgClass").attr("src", "./images/page_product4-1.png");
    });
    $(".button4").click(function(){
        $(".imgClass").attr("src", "./images/page_main_product.png");
    });
});


$(function(){
   $(".heart_box a").click(function () {
   $(this).toggleClass("on");
   });
});
