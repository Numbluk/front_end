$(document).ready(function() {
  var $p = $("p");
  var output = "Your favorite fruit is ";

  $("li").on("click", "a", function(event) {
    event.preventDefault();

    var $event = $(this);

    $p.text(output + $event.text() + ". MMMM fruity :)");
  });

  $("form").on("submit", function(event) {
    event.preventDefault();
    var $input = $(this).find("input[type='text']");

    $p.text(output + $input.val() + ". MMMM fruity :)");
  });
});
