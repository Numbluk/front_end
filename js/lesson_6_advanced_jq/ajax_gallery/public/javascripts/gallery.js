$(document).ready(function() {
  var templates = {};

  $("script[type='text/x-handlebars']").each(function() {
    var $template = $(this);
    templates[$template.attr("id")] = Handlebars.compile($template.html());
  });
});
