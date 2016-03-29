var app = app || {};

// AppView is top-level piece of UI
app.AppView = Backbone.View.extend({

  // bind to existing skeleton of app
  el: "#todoapp",

  // Template for stats at bottom
  statsTemplate: _.template( $('#stats-template').html() ),

  // Delegated events for creating new items and deleting old ones
  events: {
    'keypress #new-todo': 'createOnEnter',
    'click #clear-completed': 'clearCompleted',
    'click #toggle-all': 'toggleAllComplete'
  },

  // bind events on itinitialization of todos collection
  initialize: function() {
    this.allCheckbox = this.$('#toggle-all')[0];
    this.$input = this.$('#new-todo');
    this.$footer = this.$('#footer');
    this.$main = this.$('#main');

    this.listenTo(app.Todos, 'add', this.addOne);
    this.listenTo(app.Todos, 'reset', this.addAll);

    this.listenTo(app.Todos, 'change:completed', this.filterOne);
    this.listenTo(app.Todos, 'filter', this.filterAll);
    this.listenTo(app.Todos, 'all', this.render);

    app.Todos.fetch();
  },

  // Re-rendering just means refreshing stats. Rest of app unchanged
  render: function() {
    var completed = app.Todos.completed().length;
    var remaining = app.Todos.remaining().length;

    if ( app.Todos.length ) {
      this.$main.show();
      this.$footer.show();

      this.$footer.html(this.statsTemplate({
        completed: completed,
        remaining: remaining
      }));

      this.$('#filters li a')
        .removeClass('selected')
        .filter('[href="#/]' + ( app.TodoFilter || '' ) + '")')
        .addClass('selected');
    } else {
      this.$main.hide();
      this.$footer.hide();
    }

    this.allCheckbox.checked = !remaining;
  },

  // Add a single todo item to the list by creating a view for it and appending
  // it to the ul
  addOne: function( todo ) {
    var view = new app.TodoView({ model: todo });
    $('#todo-list').append( view.render().el );
  },

  // Add all items in the todos collection at once
  addAll: function() {
    this.$('#todo-list').html('');
    app.Todos.each(this.addOne, this);
  },

  filterOne: function( todo ) {
    todo.trigger('visible');
  },

  filterAll: function() {
    app.Todos.each(this.filterOne, this);
  },

  // Generate attributes for a new todo item
  newAttributes: function() {
    return {
      title: this.$input.val().trim(),
      order: app.Todos.nextOrder(),
      completed: false
    };
  },

  // If hit enter then create new Todo model that is persisting
  createOnEnter: function( event ) {
    if ( event.which !== ENTER_KEY || !this.$input.val().trim() ) {
      return;
    }

    app.Todos.create( this.newAttributes() );
    this.$input.val('');
  },

  // Clear all completed todo items, destroying their models
  clearCompleted: function() {
    _.invoke(app.Todos.completed(), 'destroy');
    return false;
  },

  toggleAllComplete: function() {
    var completed = this.allCheckbox.checked;

    app.Todos.each( function( todo ) {
      todo.save({
        'completed': completed
      });
    });
  }
});
