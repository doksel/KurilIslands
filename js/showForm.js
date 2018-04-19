$(document).ready(function(){
    const form = document.querySelector(".form");
    const contact = document.querySelector(".contact");

    $(".contact").click(function(){
        $(".form").css("opacity", "0")
        .animate({opacity:'1'},2000);
    });
});