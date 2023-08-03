$(function(){
    $(".offline_shop a").click(function(){
        $("#popup").fadeIn();
    });
    $(".popup_po>p").click(function(){
        $("#popup").fadeOut(500);
    });
});