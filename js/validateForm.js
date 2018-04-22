const userFirstName = document.querySelector('#form_fname');
const userSecondName = document.querySelector('#form_sname');
const userEmail = document.querySelector('#form_email');
const userPhone = document.querySelector('#form_phone');

const validFirstName = document.querySelector('.valid-form_fname');
const validSecondName = document.querySelector('.valid-form_sname');
const validEmail = document.querySelector('.valid-form_email');
const validPhone = document.querySelector('.valid-form_phone');

const patternName = /^[a-zа-яё]+$/i;
const patternEmail = /[A-Z0-9._%+-]+@[A-Z0-9-]+.+.[A-Z]{2,4}/igm ;
const patternPhone = /^\+\d{2}\(\d{3}\)\d{3}-\d{2}-\d{2}$/;

function validateForm(){

event.preventDefault();

    if(userFirstName.value == "" ){
        userFirstName.style.border = "solid red 1px";
        validFirstName.textContent = "Заполните поле";
    }else{
        userFirstName.style.border = "solid green 1px";
        validFirstName.textContent = "";
    }

    if(userSecondName.value == "" ){
        userSecondName.style.border = "solid red 1px";
        validSecondName.textContent = "Заполните поле";
    }else{
        userSecondName.style.border = "solid green 1px";
        validSecondName.textContent = "";
    }

    if(userEmail.value == "" ){
        userEmail.style.border = "solid red 1px";
        validEmail.textContent = "Заполните поле";
        }else{
        userEmail.style.border = "solid green 1px";
        validEmail.textContent = "";
    }

    if(userPhone.value == "" ){
        userPhone.style.border = "solid red 1px";
        validPhone.textContent = "Заполните поле";
    }else{
        userPhone.style.border = "solid green 1px";
        validPhone.textContent = "";
    }
    // if(patternName.test(userFirstName.value)){
    //     userFirstName.style.border = "solid green 1px";
    //     validFirstName.textContent = "";
    // }else{
    //     validFirstName.textContent = "ddddddd";
    // }
    return true;
};