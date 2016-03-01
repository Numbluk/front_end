// 1. The result of this calculation is currently a string. Using type coercion, correct the calculation to get the correct result.
//
// var x = "13",
//     y = 9;
//
// console.log(x + y);

var x = "13",
    y = 9;

console.log(+x + y);

//  2. Using the same block of JavaScript, change the addition operator to a multiplication operator and leave x as a string. Will the result be a string or a number?
//
// It will be a number. + is not because JS thinks + is concatenation

console.log(x * y);

// 3. Convert the three parts of this telephone number to strings in order to obtain a correct concatenated phone number.

var npa = 212,
    nxx = 555,
    num = 1212;

// console.log(npa + nxx + num);
console.log("" + npa + nxx + num);


// 4. Strings can also be created from numbers using the String() constructor. This is a function that takes an argument and converts it to a string. Try it out using the previous block of code, wrapping each number in a String() call.

console.log(String(npa) + String(nxx) + String(num));

// 5. Another way of converting values to strings is to call the toString method on them. Try converting a boolean, an array, and an object using toString. Did you receive the string you expected?

var bool = true,
    arr = [1, 2, 3],
    obj = { foo: "bar" };

console.log(bool.toString());
console.log(arr.toString());
console.log(obj.toString());
