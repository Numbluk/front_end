$(document).ready(function() {
  $("input[type='button']").on("click", function() {
    var first_num = +$("#first_num").val();
    var second_num = +$("#second_num").val();

    var result = 0;
    var operator = $("select").val();
    if (operator == '+') {
      result = first_num + second_num;
    } else if (operator == '-' ) {
      result = first_num - second_num;
    } else if (operator == '/' ) {
      result = first_num / second_num;
    } else {
      result = first_num * second_num;
    }

    $("h1").text(result);
  });
});
