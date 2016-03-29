var User = Backbone.Model.extend({
  url: "http://jsonplaceholder.typicode.com/users"
});

var template = Handlebars.compile($("#users").html());

var Users = Backbone.Collection.extend({
  url: "http://jsonplaceholder.typicode.com/users",
  model: User,
  render: function() {
    $("body").append(template({ users: this.toJSON()}));
  },
  initialize: function() {
    this.on("sync sort", this.render());
  },
  parse: function(response) {
    response.forEach(function(user) {
      user.company_name = user.company.name;
      user.catchPhrase = user.company.catchPhrase;
      user.company_bs = users.bompany.bs;
      delete user.company;
    });
    return resonse;
  }
});

var users = new Users();
users.fetch({
  success: function(collection) {
    console.log(collection);
  }
});

var new_user = new User({
  name: "Dave",
  email: "Dave@gmail.com"
});
// users.add(new_user);
// // null here implies that no properties are being sent to server
// new_user.save(null, {
//   sucess: function() {
//     console.log(users.toJSON());
//   }
// });

users.create(new_user, {
  success: function(created) {
    console.log(created.toJSON());
  }
});

users.fetch({
  reset: true,
  success: function(collection) {
    console.log(collection.length);
  }
});

users.set({
  id: 1,
  name: 'Steve',
  email: 'Steve@gmail.com'
});
console.log(users.first().toJSON());

users.fetch();
users.comparator = 'name';
users.sort();

var all_emails = users.pluck("email");
