$(document).ready(function() {
  if ($("#hamburger").is(":visible")) {
    $("#hamburger").on("click", function(event) {
      event.preventDefault();
      if (!$("aside").is(":visible")) {
        $("aside").toggleClass("fixed").show();
        $(".sidebar_background").toggleClass("fixed_background").show();
      } else {
        $("aside").toggleClass("fixed").hide();
        $(".sidebar_background").toggleClass("fixed_background").hide();
      }
      $("#hamburger").toggleClass("position_hamburger_abs");
      $("main h1").toggleClass("hamburger-padding");
    });
  }
});
