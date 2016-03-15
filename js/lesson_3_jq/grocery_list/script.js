$(document).ready(function() {
  $("button#add").on("click", function() {
    var quantity = $("#quantity").val() || 1;
    var item_name = $("#name").val();

    $("ul").append("<li>" + quantity + " " + item_name + "</li>");
  });

  $("#quantity").on("keypress", function(e) {
    if(e.which === 13) {
      $("button#add").click();
    }
  });
});
