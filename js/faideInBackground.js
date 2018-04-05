$(document).ready(function(){
    function changeBackground(){
        let i=1;
        setInterval(()=>{
            $("header").css({
                "background": "url('./images/bg"+i+".jpg') no-repeat center", 
                "background-size": "cover",
                "opacity":"0.2"})
                .animate({opacity:'1'},1000);
                if(i==3) i=1;
                else i++;    
        },5000)};
        
    changeBackground();
});