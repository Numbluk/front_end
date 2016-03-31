window.onpopstate = function(e) {
  var state = e.state;
  showArticle(state.id || "tetons");
};

$("nav").on("click", "a", function(e) {
  e.preventDefault();
  var active_article = $(e.target).attr("href");

  showArticle(active_article);

  var page_info = {
    id: active_article,
    text: $(e.target).text(),
    path: location.pathname + '#' + $(e.target).attr("href")
  };

  history.pushState(page_info.id, page_info.text, page_info.path);
});

if (location.hash) {
  showArticle(location.hash);
}

function showArticle(active_article) {
  $("[id='" + active_article + "']").show();
  var x = $("article").filter(function() {
    return $(this).attr("id") !== active_article;
  }).each(function() {
    $(this).hide();
  });
}
