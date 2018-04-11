const userFirstName = document.querySelector('#form_fname');
const userSecondName = document.querySelector('#form_sname');
const userEmail = document.querySelector('#form_email');
const userPhone = document.querySelector('#form_phone');
let fail = false;

const rules = {
    required: function(elem){
        (!elem.value || elem.value == ' ') ? false : true;
    },
    email: function(elem){
        const paternEmail = /[A-Z0-9._%+-]+@[A-Z0-9-]+.+.[A-Z]{2,4}/igm ;
        (paternEmail.test(elem.value)) ? true : false;
    },
    name: function(elem){
        const paternName = /^[a-zа-яё]+$/i;
        
        (paternName.test(elem.value)) ? true : false;
    } 
}

// const paternName = /^[a-zа-яё]+$/i;
// const paternEmail = /[A-Z0-9._%+-]+@[A-Z0-9-]+.+.[A-Z]{2,4}/igm ;
// const paternPhone = /^\+\d{2}\(\d{3}\)\d{3}-\d{2}-\d{2}$/;

function validateForm(){



    // event.preventDefault();

    // if(!userFirstName.value || userFirstName.value == " "){
    //     userFirstName.style.border = "solid red 2px";
    //     fail = "Введите имя!";
    // }
    // else if(!userSecondName.value || userSecondName.value == " "){
    //     userSecondName.style.border = "solid red 2px";
    //     fail = "Введите фаилию!";
    // }
    // else if(!userEmail.value || userEmail.value == " " || paternEmail.test(userEmail.value)){
    //     userEmail.style.border = "solid red 2px";
    //     // userEmail.style.color = "red";
    //     fail = "Введите email!";
    // }
    // else if(!userPhone.value || userPhone.value == " " || paternPhone.test(userEmail.value)){
    //     userPhone.style.border = "solid red 2px";
    //     fail = "Введите номер телефона!";
    // }

    // if(fail)
    //     alert(fail);

}