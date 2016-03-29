var app = app || {};

// Basic todo has 'title' and 'completed' attributes

app.Todo = Backbone.Model.extend({
  // Set default for each todo
  // defaults is always called if there is one
  defaults: {
    title: '',
    completed: false
  },

  // Toggle the 'completed' state of the todo item
  toggle: function() {
    this.save({
      completed: !this.get('completed')
    });
  }
});
