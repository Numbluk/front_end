$(document).ready(function() {
  var post1 = {
    title: "Lorem Ipsum",
    date: "04/22/16",
    body: " Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    contains_html: "<p>Hello</p><h1>Doge</h1>",
    tags: ["tag1", "tagheur", "tag10"]
  };

  var post2 = {
    title: "Other Ipsum",
    date: "04/23/16",
    body: " Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    contains_html: "<p>Hello</p><h1>Doge</h1>",
    tags: []
  };

  var post_arr = [post1, post2];

  // Main template
  var blog_list_source = $("#blog_list").html();
  var blog_list_template = Handlebars.compile(blog_list_source);

  // Partials
  var blog_source = $("#blog_template").html();
  var blog_template = Handlebars.compile(blog_source);

  Handlebars.registerPartial("blog_template", blog_source);

  var tag_source = $("#tag_template").html();
  var tag_template = Handlebars.compile(tag_source);

  Handlebars.registerPartial("tag_template", tag_source);

  $("main").append(blog_list_template({post: post_arr}));

});
