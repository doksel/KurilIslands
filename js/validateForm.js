const userFirstName = document.querySelector('#form_fname');
const userSecondName = document.querySelector('#form_sname');
const userEmail = document.querySelector('#form_email');
const userPhone = document.querySelector('#form_phone');
let fail = false;

function validateForm(){

    event.preventDefault();

    if(!userFirstName.value || userFirstName.value == " "){
        userFirstName.style.border = "solid red 2px";
        fail = "Введите имя!";
    }

    if(!userSecondName.value || userSecondName.value == " "){
        userSecondName.style.border = "solid red 2px";
        fail = "Введите фаилию!";
    }
    if(!userEmail.value || userEmail.value == " "){
        userEmail.style.border = "solid red 2px";
        fail = "Введите email!";
    }

    if(!userPhone.value || userPhone.value == " "){
        userPhone.style.border = "solid red 2px";
        fail = "Введите номер телефона!";
    }

    if(fail)
        alert(fail);

}