var location1 = Math.floor(Math.random() * 5), 
		location2 = location1 + 1, 
		location3 = location2 + 1,
		current_guess;

var hits = 0,
		guesses = 0;

var isSunk = false;

while (isSunk == false) {
	current_guess = prompt("Aim fir ma shipz! (0-6):");
	if (current_guess < 0 && current_guess > 6) {
		prompt("Please enter a valid number (1-6)");
	}
	else {
		guesses += 1;
		if (current_guess == location1 ||
				current_guess == location2 ||
				current_guess == location3) {
			alert("HIT!");
			hits += 1
			if (hits == 3) {
				isSunk = true;
				alert("You sank ma battleshipz!");
			}
		}
		else { alert("MISS!"); }
	}
}

var stats = "It took you " + guesses + " guesses to sink ma battleshipz!" +
			"This means your shooting accuracy was " + (3/guesses) + "!";
	alert(stats);