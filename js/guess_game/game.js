$(function() {
	var answer = Math.floor(Math.random() * 100) + 1;
	var display_msg = $("main > p");
	var attempts = 0;

	$("form").on("submit", function(event) {
		event.preventDefault();
		attempts++;
		var guess = +$("input#guess").val();
	
		var message = "";
		if (guess > answer) {
			message = "That is too high!";
		}
		else if (guess < answer) {
			message = "That is too small!";
		}
		else if (guess === answer) {
			message = "You guessed it! It took you " + attempts + " guesses!";
		}

		display_msg.text(message);
	});


	$("main > a").on("click", function(event) {
		event.preventDefault();
		answer = Math.floor(Math.random() * 100) + 1;

		message = "Guess a number from 1 to 100";
		display_msg.text(message);
	});
});