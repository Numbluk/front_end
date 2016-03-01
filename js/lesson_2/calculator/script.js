window.onload = function() {
  document.getElementById("submit").onclick = function(e) {
    e.preventDefault();
    var first_num = +document.getElementById("first_num").value;
    var second_num = +document.getElementById("second_num").value;

    var result = 0;
    var operator = document.getElementById("operators").value;
    if (operator == '+') {
      result = first_num + second_num;
    } else if (operator == '-' ) {
      result = first_num - second_num;
    } else if (operator == '/' ) {
      result = first_num / second_num;
    } else {
      result = first_num * second_num;
    }
    document.getElementsByTagName("h1")[0].innerHTML = result
  };
};
