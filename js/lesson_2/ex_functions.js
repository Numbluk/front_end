function average(a, b, c) {
  return sum(a, b, c) / 3
}

function sum(a, b, c) {
  return a + b + c;
}

console.log(average(4, 5, 6));

function average_arr(arr) {
  return sum_arr(arr) / arr.length;
}

function sum_arr(arr) {
  var total = 0;
  for(var i = 0; i < arr.length; i++) {
    total += arr[i];
  }
  return total;
}

console.log(average_arr([1, 2, 3, 4, 5]));

var temperatures = [70, 64, 59, 64, 55];
console.log(average_arr(temperatures));

var fizzBuzz = function() {
  for(var i = 1; i <= 100; i++) {
    output = "";
    if (i % 3 === 0) {
      output += "Fizz";
    }
    if (i % 5 === 0) {
      output += "Buzz";
    }
    console.log(output || i);
  }
};
fizzBuzz();

var random = function(max) {
  return Math.ceil(Math.random() * max);
};

console.log(random(100));
