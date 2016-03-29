var app = app || {};

// The DOM element for a todo item...
app.TodoView = Backbone.View.extend({
  tagName: 'li',

  template: _.template( $('#item-template').html() ),

  events: {
    'dbclick label': 'edit',
    'keypress edit': 'updateOnEnter',
    'blur .edit': 'close'
  },

  // The todoview listens for changes to its model
  initialize: function() {
    this.listenTo(this.model, 'change', this.render);
  },

  // re-renders the titles of the todo item
  render: function() {
    this.$el.html( this.template( this.model.attributes ) );
    this.$input = this.$('.edit');
    return this;
  },

  // Switch this view intio 'editing' mode, displaying the input field
  edit: function() {
    this.$el.addClass('editing');
    this.$input.focus();
  },

  // Close the 'editing' mode, saving changes to the todo
  close: function() {
    var value = this.$input.val().trim();

    if (value) {
      this.model.save({ title: value });
    }

    this.$el.removeClass('editing');
  },

  // If you hit 'enter', then editing is finished
  updateOnEnter: function( e ) {
    if ( e.which === ENTER_KEY ) {
      this.close();
    }
  }
});
