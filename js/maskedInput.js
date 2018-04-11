$(function(){
  $.mask.definitions['h']='[А-Я,а-я,A-Z,a-z]';
  $("#form_fname").mask("hhhhhhhhhhhhhhhhhhhhhhhhhhhhhh");
  $("#form_sname").mask("hhhhhhhhhhhhhhhhhhhhhhhhhhhhhh");
  $("#form_phone").mask("+38(999) 999-9999");
  });
  // #form_email: [а-я,a-z,0-9]1-10[@]1[а-я,a-z,0-9]1-10[.]1C2-3
  // #form_phone: [+7]1[(,0-9]1N3[),0-9]1N5-7
  // #name: [А-Я,а-я,A-Z,a-z]1-15
