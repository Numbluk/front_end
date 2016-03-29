var PostModel = Backbone.Model.extend({});

var Posts = Backbone.Collection.extend({
  model: PostModel,
  url: "http://jsonplaceholder.typicode.com/posts",
  last_id: 0,
  initialize: function() {
    this.on("sync", this.setLastID);
  },
  setLastID: function() {
    if (this.isEmpty()) { return; }
    this.last_id = this.last().get("id");
  },
  nextID: function() {
    return ++this.last_id;
  }
});

var blog_roll = new Posts();
blog_roll.fetch({
  reset: true,
  success: function(collection) {
    console.log(collection.toJSON());
  }
});

blog_roll.set({
  id: 1,
  userId: 1,
  title: "My First Post",
  body: "This is my first blog post! Yay!"
});

var first_post = blog_roll.get(1);

var User = Backbone.Model.extend({});
var Users = Backbone.Collection.extend({
  model: User
});
var blog_authors;

var users_data = [{
  id: 1,
  name: "Leanne Graham"
}, {
  id: 2,
  name: "Ervin Howell"
}, {
  id: 3,
  name: "Clementine Bauch"
}];

blog_authors = new Users();
blog_authors.reset(users_data);

console.log(blog_authors.toJSON());

var new_post = blog_roll.add({
  title: "My New Blog Post",
  body: "This is my latest blog post. I hope you like it!",
  userID: 1
});

// after the request completes
console.log(new_post.get("id"));
