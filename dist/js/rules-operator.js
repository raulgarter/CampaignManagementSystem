function showOperator(i) {
  console.log($("input[name='ruleNames[]']").length);
  var ruleField = $(".ruleFields_list")[i];
  var field = ruleField.options[ruleField.selectedIndex].text;
  console.log('cambio ' + i);
  console.log(ruleField.options[ruleField.selectedIndex].text);
  if(field == 'Días desde el inicio del plan' || field == 'Días entre envíos'){
    $(".operators_list")[i].innerHTML = ">";
  }else if (field == 'Plan'){
    $(".operators_list")[i].innerHTML = "=";
  }else{
    $(".operators_list")[i].innerHTML = "<";
  }
}