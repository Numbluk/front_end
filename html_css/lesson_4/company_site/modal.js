$(window).load(function() {
  $("article li > a").on("click", function(event) {
    event.preventDefault();
    var $current = $(this);

    $current.siblings(".modal").css({
      top: $(window).scrollTop() + 30
    });

    $current.siblings("div").fadeIn(400);
  });

  $(".modal_layer, a.close").on("click", function(event) {
    event.preventDefault();

    $(".modal_layer, .modal").filter(":visible").fadeOut(400);
  });
});
