window.onload = function() {
	var calculator = document.getElementById("calculator");

	calculator.onsubmit = function(event) {
		event.preventDefault();

		var = final_value = 0;
		var = value1 = +document.getElementById("numerator").value;
		var = value2 = +document.getElementById("denominator").value;
		var = operator = document.getElementById("operator").value;


		if (operator === "+") {
			final_value = value1 + value2;
		} else if (operator === "-") {
			final_value = value1 - value2;
		} else if (operator === "*") {
			final_value = value1 * value2;
		} else if (operator === "/") {
			final_value = value1 / value2;
		}

		document.getElementById("header").innerHTML = final_value;
	};
};