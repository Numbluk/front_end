$(window).load(function() {
  $(".active").clone().prependTo("#showing");

  $("ul").on("click", "li a", function(event) {
    event.preventDefault();
    $(".active").removeClass("active");
    var $image_replacement = $(this).addClass("active").clone();

    $("#showing > a").stop().fadeOut(300, function(event) {
      $replace = $(this);
      $image_replacement.delay(300).fadeIn(300, function() {
        $replace.replaceWith($image_replacement);
      });
    });
  });
});
