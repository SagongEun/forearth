$(document).ready(function() {

    $(".tab_content").hide(); 
    $("ul.tabs li:first").addClass("active").show(); 
    $(".tab_content:first").show(); 

    //On Click Event
    $("ul.tabs li").click(function() {

        $("ul.tabs li").removeClass("active"); 
        $(this).addClass("active"); 
        $(".tab_content").hide(); 

        var activeTab = $(this).find("a").attr("href"); 
        $(activeTab).fadeIn(); 
        return false;
    });

});

$(function () {
    start();
    var imgs = 1;
    var now = 0;
    function start() {
        $(".slide li").eq(0).siblings().fadeOut();
        setInterval(function () { slide(); }, 3000)
    };
    function slide() {
        now = now == imgs ? 0 : now += 1;
        $(".slide li").eq(now - 1).fadeOut();
        $(".slide li").eq(now).fadeIn();
    };
});