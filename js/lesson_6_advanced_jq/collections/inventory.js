var inventory;

(function() {
  inventory = {
    init: function() {
      this.writeDate();
      this.cacheTemplate();
      this.bindEvents();
    },
    writeDate: function() {
      var date = new Date();
      var today = date.toUTCString();
      $("#date").text(today);
    },
    template: "",
    last_id: 0,
    collection: [],
    cacheTemplate: function() {
      this.template = $("#inventory_item").remove().html();
    },
    add: function() {
      this.last_id++;
      var item = {
        id: this.last_id,
        name: "",
        stock_number: "",
        quantity: 1
      };
      this.collection.push(item);
      return item;
    },
    remove: function(index) {
      this.collection = this.collection.filter(function(item) {
        return item.id !== index;
      });
    },
    findID: function($item) {
      return +$item.find("input[type='hidden']").val();
    },
    get: function(id) {
      var found_item;
      this.collection.forEach(function(item) {
        if (item.id === id) {
          found_item = item;
          return false;
        }
      });

      return found_item;
    },
    update: function($item) {
      var id = this.findID($item),
          item = this.get(id);

      item.name = $item.find("[name^='product_name']").val();
      item.stock_number = $item.find("[name^='stock_num']").val();
      item.quantity = $item.find("[name^='quantity']").val();
    },
    newItem: function(event) {
      event.preventDefault();
      var item = this.add(),
          $item = $(this.template.replace(/ID/g, item.id));
      // console.log(this.template);
      // console.log($item.html());
      $("fieldset#ordering").append($item);
    },
    findParent: function(e) {
      return $(e.target).closest("div");
    },
    deleteItem: function(event) {
      event.preventDefault();
      var $item = this.findParent(event).remove();

      this.remove(this.findID($item));
    },
    updateItem: function(event) {
      var $item = this.findParent(event);

      this.update($item);
    },
    bindEvents: function() {
      $("button#add").on("click", $.proxy(this.newItem, this));
      $("fieldset#ordering").on("click", "a.delete", $.proxy(this.deleteItem, this));
      $("fieldset#ordering").on("blur", ":input", $.proxy(this.updateItem, this));
    }
  };

})();

$($.proxy(inventory.init(), inventory));
