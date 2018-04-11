$(function(){
    $("#form_phone").mask("(999) 999-9999");
    $("#form_email").mask("99/99/9999",{placeholder:"mm/dd/yyyy"});
  });
  // #form_email: [а-я,a-z,0-9]1-10[@]1[а-я,a-z,0-9]1-10[.]1C2-3
  // #form_phone: [+7]1[(,0-9]1N3[),0-9]1N5-7
  // #name: [А-Я,а-я,A-Z,a-z]1-15