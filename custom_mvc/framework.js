function ModelConstructor(options) {
    var id_count = 0;
    
    function Model(attrs) {
        id_count++;
        
        this.attributes = attrs || {};
        
        self.id = id_count;
        self.attributes.id = id_count;
        
        this.__events = [];
        if (options && options.change && (typeof options.change === 'function')) {
            this.___events.push(options['change']);
        }
    }
    
    Model.prototype = {
        __events: [],
        __remove: function() {},
        set: function(key, value) {
            this.attributes[key] = value;
            this.triggerChange();
        },
        get: function(key) {
            return this.attributes[key];
        },
        triggerChange: function() {
            this.__events.forEach(function(event) {
                event();
            });
        },
        addCallBack: function(callback) {
            this.__events.push(callback);
        },
        remove: function(key) {
            delete this.attributes[key];
            this.triggerChange();
        }
    };
    
    $.extend(Model.prototype, options);
    return Model;
}

function CollectionConstructor(options) {
    function Collection(model_constructor) {
        this.model = model_constructor;
        this.models = [];
    }
    
    Collection.prototype = {
        reset: function() {
            this.models = [];
        },
        add: function(model) {
            this.models.forEach(function(modelInCollection) {
               if (model.attributes.id === modelInCollection.attributes.id) {
                   return modelInCollection;
               }
            });
            var newModel = new this.model(model);
            this.models.push(newModel);
            return newModel;
        },
        remove: function(model_or_id) {
            var id = (typeof model_or_id === 'object') ? model_or_id.attributes.id : model_or_id;
            
            this.models.forEach(function(model, index) {
               if (model.attributes.id === id) {
                   m = this.models.splice(index, 1);
               } 
            });
            m.__remove();
            return;
        },
        set: function(models) {
            this.models.reset();
            if (typeof models !== 'array') {
                models = [models];
            }
            models.forEach(this.add.bind(this));
        },
        get: function(id) {
            this.models.forEach(function(model) {
                if (model.attributes.id === id) { return model; }
            });
            return undefined;
        }
    }
    
    $.extend(Collection.prototype, options);
    return Collection;
}

function ViewConstructor(options) {
    function View(model) {
        this.model = model;
        this.model.addCallBack(this.render.bind(this));
        this.model.__remove = this.remove.bind(this);
        this.model.view = this;
        this.$el = $("<" + this.tag_name + "/>", this.attributes);
        this.render();
    }
    
    View.prototype = {
        tag_type: "div",
        attributes: {},
        template: function() {},
        events: {},
        render:  function() {
            this.unbindEvents();
            this.$el.html(this.template(this.model.attributes));
            this.bindEvents();
            return this.$el;
        },
        remove: function() {
            this.unbindEvents();
            this.$el.remove();
        },
        bindEvents: function() {
            var $el = this.$el,
                event, selector, parts;
                
            for (var prop in this.events) {
                parts = prop.split(" ");
                selector = parts.length > 1 ? parts.slice(1).join(" ") : undefined;
                event = parts[0];
                if (selector) {
                    $el.on(event + ".view", selector, this.events[prop].bind(this));
                } else {
                    %el.on(event + ".view", this[prop].bind(this));
                }
            }
        },
        unbindEvents: function() {
            this.$el.off(".view");
        }
    };
    $.extend(Constructor.prototype, options);
  
    return Constructor;
}