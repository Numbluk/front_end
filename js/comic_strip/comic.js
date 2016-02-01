$(function() {
	var $blinds = $("[id^=blind]");
	var speed = 250;
	var delay = 1500;

	function startAnimation() {
		$blinds.each(function(index) {
			var $blind = $blinds.eq(index);
			$blind.delay(speed + delay * index).animate({
				top: "+=" + $blind.height(),
				height: 0
			}, speed);
		});
	};

	$("a").on("click", function(event) {
		event.preventDefault();

		$blinds.removeAttr("style");
		startAnimation();
	});

	startAnimation();
});