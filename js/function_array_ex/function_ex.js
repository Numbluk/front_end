function sum(numbers) {
	var total = 0;
	for(var x = 0; x < numbers.length; x++)
	{
		total += numbers[x];
	}
	return total;
}

function average(numbers) {
	return sum(numbers) / numbers.length;
}


var some_numbers = [1, 2, 3, 4, 5];
console.log(average(some_numbers));
console.log(sum(some_numbers));

var temps = [73, 55, 60, 58, 63]
console.log(average(temps));

function fizzBuzz() {
	var fizz = "Fizz",
			buzz = "Buzz",
			msg = "";

	for(var i = 1; i <= 100; i++) {
		if (i % 3 == 0) { msg = fizz; }
		if (i % 5 == 0) { msg += buzz; }
		console.log(msg || i);
	}
}

fizzBuzz();

function maxRandom(max_num) {
	return Math.floor(Math.random * max_num + 1);
}