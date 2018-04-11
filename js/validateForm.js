$(document).ready(function() {
    const userFirstName = document.querySelector('#form_fname');
    const userSecondName = document.querySelector('#form_sname');
    const userEmail = document.querySelector('#form_email');
    const userPhone = document.querySelector('#form_phone');


    // let fail = false;
    // const rules = {
    //     required: function(elem){
    //         (!elem.value || elem.value == ' ') ? false : true;
    //     },
    //     email: function(elem){
    //         const paternEmail = /[A-Z0-9._%+-]+@[A-Z0-9-]+.+.[A-Z]{2,4}/igm ;
    //         (paternEmail.test(elem.value)) ? true : false;
    //     },
    //     name: function(elem){
    //         const paternName = /^[a-zа-яё]+$/i;
            
    //         (paternName.test(elem.value)) ? true : false;
    //     } 
    // }

    const patternName = /^[a-zа-яё]+$/i;
    const patternEmail = /[A-Z0-9._%+-]+@[A-Z0-9-]+.+.[A-Z]{2,4}/igm ;
    const patternPhone = /^\+\d{2}\(\d{3}\)\d{3}-\d{2}-\d{2}$/;

    function validateForm(){

        event.preventDefault();

        if(!userFirstName.value || userFirstName.value == " "){
            if(patternName.test(userFirstName.value)){
                userFirstName.style.border = "solid green 2px";
                $('.valid-form_fname').text = ("Верно");   
                console.log($('.valid-form_fname')); 
            }else{
                userFirstName.style.border = "solid red 2px";
                $('.valid-form_fname').text = ("Введите корректное имя");    
            }
        }else{
            userFirstName.style.border = "solid red 2px";
            $('.valid-form_fname').text = ("Введите имя");    
        }

        if(!userSecondName.value || userSecondName.value == " "){
            if(patternName.test(userSecondName.value)){
                userSecondName.style.border = "solid green 2px";
                $('.valid-form_fname').text = ("Верно");    
            }else{
                userSecondName.style.border = "solid red 2px";
                $('.valid-form_fname').text = ("Введите корректную фамилию");    
            }
        }else{
            userSecondName.style.border = "solid yellow 2px";
            $('.valid-form_fname').text = ("Введите фамилию");    
        }

        if(!userEmail.value || userEmail.value == " "){
            userEmail.style.border = "solid red 2px";
            // userEmail.style.color = "red";
        }
        else if(!userPhone.value || userPhone.value == " "){
            userPhone.style.border = "solid red 2px";
        }
    }
});
// ============================================================================
$(document).ready(function() {
    $('#email').blur(function() {
        if($(this).val() != '') {
            var pattern = /^([a-z0-9_\.-])+@[a-z0-9-]+\.([a-z]{2,4}\.)?[a-z]{2,4}$/i;
            if(pattern.test($(this).val())){
                $(this).css({'border' : '1px solid #569b44'});
                $('#valid').text('Верно');
            } else {
                $(this).css({'border' : '1px solid #ff0000'});
                $('#valid').text('Не верно');
            }
        } else {
            $(this).css({'border' : '1px solid #ff0000'});
            $('#valid').text('Поле email не должно быть пустым');
        }
    });
});