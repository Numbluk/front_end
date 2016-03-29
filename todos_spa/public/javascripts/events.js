$(document).ready(function() {
    var events_template = Handlebars.compile($('#events').html());
    var event_template = Handlebars.compile($('#event').html());
    Handlebars.registerPartial('event', $('#event').html());
    
    var Events = {
       collection: [],
       $el: $("#events_list"),
       add: function(events) {
         var self = this;
        events = (events.construct === Array) ? events : [events];
         
         events.forEach(function(event) {
           self.collection.push(event);  
         });
         
         self.sort();
         self.render();
       },
       remove: function(idx) {
         var model = this.collection.splice(idx, 1);
         
         if (!model) { return true; }
         
         this.collection = this.collection.filter(function(existing_model) {
            return existing_model.id !== model.id; 
         });
         
         this.render();
       },
       sort: function() {
         this.collection.sort(function(a, b) {
           if (a.date < b.date) { return -1; }
           if (a.date > b.date) { return 1; }  
           return 0;
         });
       },
       render: function(events) {
           this.$el.html(events_template({ events: this.collection}));
       }  
    };
    
    $("form").on("submit", function(e) {
       e.preventDefault();
       var $form = $(this);
       
       $.ajax({
           url: $form.attr("action"),
           type: $form.attr("method"),
           data: $form.serialize(),
           success: function(event) {
               Events.add(event);
           }
       }) 
    });
    
    Events.$el.on("click", "a.remove", function(e) {
       e.preventDefault(); 
       var id = +$(e.target).closest("li").attr("data-id");
       Events.remove(id);
       
       $.ajax({
           url: "/index/delete",
           type: "post",
           data: "id=" + id
       });
    });
    
    $.ajax({
        url: '/index',
        success: function(events) {
            Event.add(events);
        }
    })
});