var friends = ["Bob", "Susie", "Sam"],
		enemies = ["Bob", "Susie", "Sam"];

console.log(friends == enemies);

var friends_clone = friends;
console.log(friends_clone == friends);

function lastInArray(my_array) {
	return my_array[my_array.length - 1];
}

var names = ["Ana", "Bob", "Carol", "Dave"];
function rollCall(names_array) {
	for(var i = 0; i < names_array.length; i++)
	{
		console.log(names_array[i]);
	}
}
rollCall(names);

var numbers = [1, 2, 3, 4, 5];
function reverse(numbers_array) {
	var reversed = [];
	for(var i = numbers_array.length - 1; i >= 0; i--) {
		reversed.push(numbers_array[i]);
	}
	return reversed;
}
console.log(reverse(numbers));

var test_numbers = [1, 2, 3, 3, 4, 5];
function remove(arr, number) {
	for(var i = 0; i < arr.length; i++) {
		if(number = arr[i])
		{
			return i;
		}
	}
	return -1;
}


var string_arr = ["hello", "good day", "well met"];
function glue_string(arr) {
	var str = "";
	for (var i = 0; i < string_arr.length; i++) {
		str += string_arr[i];
	}
	return str;
}
console.log(glue_string(string_arr));
