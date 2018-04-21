$(document).ready(function(){
    $(".contact").click(function(){
        $(".form").css("opacity", "0")
        .animate({opacity:'1'},1000);
    });
});