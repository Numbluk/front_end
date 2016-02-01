var inventory;

(function() {
	inventory = {
		setDate: function() {
			var date = new Date();
			$("#order_date").text(date.toUTCString());
		},
		init: function() {
			this.setDate();
		}
	};
});

$($.proxy(inventory.init, inventory));