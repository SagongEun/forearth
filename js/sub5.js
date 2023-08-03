$(function(){
    $(".magazine_content a").click(function(){
        $("#card_popup").fadeIn();
    });
    $("#card_popup>p img").click(function(){
        $("#card_popup").fadeOut(500);
    });
});

$('html, body').css({'overflow': 'hidden', 'height': '100%'}); // 모달팝업 중 html,body의 scroll을 hidden시킴
$('#element').on('scroll touchmove mousewheel', function(event) { // 터치무브와 마우스휠 스크롤 방지
    event.preventDefault();
    event.stopPropagation();

    return false;
});

$('html, body').css({'overflow': 'auto', 'height': '100%'}); //scroll hidden 해제
$('#element').off('scroll touchmove mousewheel'); // 터치무브 및 마우스휠 스크롤 가능
