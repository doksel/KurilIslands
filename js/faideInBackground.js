$(document).ready(function(){
    function changeBackground(){
        let i=1;
        setInterval(()=>{
            $("header").css({
                "background": "url('./images/bg"+i+".jpg') no-repeat center", 
                "background-size": "cover","opacity":"0.4"})
                .animate({opacity:'1'},2000);
                if(i==3) i=1;
                else i++;    
        },3000)};

    changeBackground();
});
