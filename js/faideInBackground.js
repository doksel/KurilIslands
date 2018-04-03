$(document).ready(function(){
    function changeBackground(){
        let i=1;
        setInterval(()=>{
            $("header").css("background", "url('./images/bg"+i+".jpg')");            
                if(i==3) i=1;
                else i++;
        },5000)};
    changeBackground();
});