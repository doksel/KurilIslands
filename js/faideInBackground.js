$(document).ready(function(){
    // function changeBackground(){
    //     let i=1;
    //     setInterval(()=>{
    //         $("header").css("background", "url('./images/bg"+i+".jpg')");            
    //             if(i==3) i=1;
    //             else i++;
    //     },5000)};
    // changeBackground();
    function changeBackground(){
        let i=3;
        setInterval(()=>{
            // $("header:nth-child(i)").css("background", "url('./images/bg"+i+".jpg')");   
            $(`.{$i}`).fadeOut("slow");         
                if(i==1) i=3;
                else i--;
        },2000)};
    changeBackground();
});