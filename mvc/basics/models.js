var Post = Backbone.Model.extend({
    urlRoot: "http://jsonplaceholder.typicode.com/posts",
    setUser: function() {
        var self = this;
        var user = new User({ user_id: self.id });
        
        user.fetch({ // fetch updates with server
            success: function(model) {
                self.set("user", model);
                console.log(self.toJSON());
            }
        });
    },
    initialize: function() {
        if (this.has("userId")) { this.setUser(); }
        this.on("change:userId", this.setUser());
        this.on("change", renderPost(this));
    }
});

var User = Backbone.Model.extend({
    urlRoot: "http://jsonplaceholder.typicode.com/users"
});

var new_post = new Post({
    id: 1
});

var new_user = new User({
   user_id: new_post.get("id") 
});
 
new_post.fetch({
   success: function(model) {
       console.log(model.toJSON());
   } 
});

new_user.fetch({
    success: function(model) {
        console.log(model.toJSON());
    }
});

new_post.set("user", new_user);
console.log(new_post.toJSON());

var post_1 = new Post({ id: 1 });
post_1.fetch({
    success: function(model) {
        model.setUser();
    }
})

var post_2 = new Post({
    id: 2,
    title: 'Why, Dave?',
    body: "I'm not bad.",
    userId: 2
});

var post_template = $("#post").html();

function renderPost(model) {
    var $post = $(post_template);
    
    $post.find("h1").text(model.get('title'));
    $post.find("header p").text("By " + model.get("user").get("name"));
    $post.find("header + p").text(model.get("body"));
    
    $(document.body).html($post);
}