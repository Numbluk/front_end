$(document).ready(function() {
  $("nav a").on("click", function(e) {
    e.preventDefault();

    var $e = $(this),
        class_name = "active",
        index = $e.closest("li").index();

    $e.closest("nav").find("." + class_name).removeClass(class_name);
    $e.addClass(class_name);
    // Works because JQuery will return a collection
    $("#tabs article").hide().eq(index).show();
    console.log(index);
    localStorage.setItem("active_nav", index);
  });

  $(":radio").on("change", function() {
    var color = $(this).val();

    $(document.body).css("background", color);
    localStorage.setItem("background", color);
  });

  setActiveNav(localStorage.getItem("active_nav"));
  setBackground(localStorage.getItem("background"));
  setNote(localStorage.getItem("note"));
});

$(window).unload(function() {
  localStorage.setItem("note", $("textarea").val());
});

function setActiveNav(index) {
  if (index === null) {
    return;
  }

  $("nav a").eq(index).click();
}

function setBackground(color) {
  if (color === null) { return; }
  $("[value='" + color + "']").prop("checked", true).change();
}

function setNote(text) {
  $("textarea").val(text);
}
