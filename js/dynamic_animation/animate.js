$(function() {
	var $canvas = $("#canvas");

	function getFormObject($form) {
		var obj = {};

		//Gets information from a form as JSON
		$form.serializeArray().forEach(function(input) {
			obj[input.name] = input.value;
		});

		return obj;
	}

	function createElement(data) {
		var $d = $("div />", {
			"class": data.shape_type,
			data: data,
		});

		resetElement($d);

		return $data;
	}

	function animateElement() {
		var $element = $(this),
				data = $element.data();

		resetElement($element);
		$element.animate({
			left: +data.end_x,
			top: +data.end_y
		}, 1000);
	}

	function resetElement($element) {
		var data = $element.data();

		$element.css({
			left: +data.start_x,
			top: +data.start_y
		});
	}

	$("form").on("submit", function(event) {
		event.preventDefault();

		var $form = $(this),
				data = getFormObject($form);

		createElement(data);

		$canvas.append(createElement(data));
	});

	$("#animate").on("click", function(event) {
		event.preventDefault();

		$canvas.find("div").each(animateElement());
	});
});