$(document).ready(function() {
  var answer = Math.ceil(Math.random() * 100);
  var num_guesses = 0;

  $("form").on("submit", function(event) {
    event.preventDefault();
    num_guesses++;
    var guess = +$("#guess").val();
    var message = "";
    if (guess > answer) {
      message = "The answer is lower than that.";
    } else if (guess < answer) {
      message = "The answer is higher than that.";
    } else {
      message = "You got it with " + num_guesses + " tries!";
    }

    $("p").text(message);
  });

  $("a").on("click", function(event) {
    event.preventDefault();
    num_guesses = 0;
    answer = Math.ceil(Math.random() * 100);
    $("p").text("Guess a number from 1 to 100");
  });
});
