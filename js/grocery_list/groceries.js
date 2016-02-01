$(function() {
	var item_name, quantity, list_item;
	var $form = $("form");

	$form.on("submit", function(event) {
		event.preventDefault();

		item_name = $form.find("#item").val();
		quantity = $form.find("#quantity").val() || 1;
		list_item = $("<li>" + quantity + " " + item_name + "</li>");

		list_item.appendTo($("ul"));
		$form.trigger("reset");
	});
});