var friends = ["Bob", "Josie", "Sam"];
var enemies = ["Bob", "Josie", "Sam"];
console.log(friends === enemies);
// Not equal because they do not point to same obj

var friends_clone = friends;
console.log(friends_clone === friends);
// True as they reference the same object

function lastInArray(arr) {
  return arr[arr.length - 1];
}

console.log(lastInArray([1, 2, 3, 4, 5]));

var first_names = ["Steve", "Martha", "Pat"];

function rollCall(arr) {
  for(var i = 0; i < arr.length; i++) {
    console.log(arr[i]);
  }
}

rollCall(first_names);

var numbers = [1, 2, 3, 4, 5];

function reverse(arr) {
  var reversed_arr = [];
  for(var i = arr.length - 1; i >= 0; i--) {
    reversed_arr.push(arr[i]);
  }
  return reversed_arr;
}
console.log(reverse(numbers));

function findFirst(val, arr) {
  for(var i = 0; i < arr.length; i++) {
    if (arr[i] == val) { return i; }
  }
  return -1;
}
console.log(findFirst(3, numbers));
console.log(findFirst(100, numbers));

function changeToString(arr) {
  var str = "";
  for(var i = 0; i < arr.length; i++) { str += arr[i]; }
  return str;
}
console.log(changeToString(numbers));
