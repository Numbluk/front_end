var app = app ||  {};

// Collection of todos is backed by 'localStorage' vs remote server
var TodoList = Backbone.Collection.extend({

  // Reference to models
  model: app.Todo,

  // Save all todo items under 'todos-backbone' namespace
  localStorage: new Backbone.LocalStorage('todos-backbone'),

  // Filter/return completed items
  completed: function() {
    return this.filter(function(todo) {
      return todo.get('completed');
    });
  },

  // Filter/return incomplete items
  remaining: function() {
    return this.without.apply(this, this.completed()); // without is _ method
  },

  // Keep todos in sequential order
  nextOrder: function() {
    if ( !this.length ) {
      return 1;
    }
    return this.last().get('order') + 1; // last is _ method
  },

  // Todos are sorted by original insertion order
  comparator: function(todo) {
    return todo.get('order');
  }
});

// Create global collection of Todos
app.Todos = new TodoList();
