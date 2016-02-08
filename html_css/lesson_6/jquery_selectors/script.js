$(document).ready(function() {
  var $h1 = $("h1");

  var $title = $("#site_title");

  var $lists_in_article = $("article > li");

  var $third_list = $("article > li:nth-child(3)")
  //or
  var $third_list_other = $("article li").eq(2);

  var $table = $("table");
  var $odd_rows = $table.find("tr:odd");

  var $li_latin = $("li:contains('ac ante')")
  var $latin_parent = $li_latin.parent();

  var $next_latin = $li_latin.next();

  var $last_cell = $("table td").last();

  var $unprotected_cells = $("table td").filter(":not('.protected')");
  // or
  $("table td").not(".protected");

  $pound = $("a[href^='#']");

  $block_class = $("[class*='block']");
});
