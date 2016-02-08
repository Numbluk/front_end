$(document).ready(function() {
  $("form").on("submit", function(event){
    event.preventDefault();

    var key = $(this).find('input[type="text"]').val();
    var key_code = key.charCodeAt(0);
    console.log(key);

    $(document).off("keypress").on("keypress", function(event) {
      if(event.which !== key_code) {
        return;
      }
      console.log('hello');

      $("a").trigger("click");
    });
  });

  $("a").on("click", function(event) {
    event.preventDefault();

    $("#accordion").slideToggle();
  });
});
