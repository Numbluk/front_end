$(window).load(function() {
  var $main_header = $("main > h1");
  $body_header = $("body > header");
  $main_header.prependTo($body_header);

  $body_header.prependTo("body");

  $figures = $("figure");
  $figures.insertAfter("article > p");

  $figures.eq(0).appendTo("article");
});
