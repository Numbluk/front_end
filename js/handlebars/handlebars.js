$(document).ready(function() {
	var posts = [];

	var post_1 = {
		title: "The Best Hax",
		date: "01-09-2016",
		body: "<p>These are the best hax.</p>",
		tags: ["Hacks", "Best", "These"]
	};

	var post_2 = {
		title: "The Cool Life",
		date: "01-08-2016",
		body: "This is the cool life",
		tags: []
	}

	posts.push(post_1);
	posts.push(post_2);

	Handlebars.registerPartial("tags", $("#tags").html());
	Handlebars.registerPartial("post", $("#post").html());

	var posts_template = Handlebars.compile($("#posts").html());


	$("body").prepend(posts_template({posts: posts}));

});