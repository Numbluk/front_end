var first_name = "Lukas";
var last_name = "Nimmo";
var full_name = first_name + " " + last_name;
console.log(full_name);

console.log(first_name.concat(" ", last_name));

var names = full_name.split(" ");
console.log(names);

var language = "JavaScript";
var idx = language.indexOf('S');
console.log(idx);

var char_code = language.charCodeAt(idx);
console.log(char_code);

console.log(String.fromCharCode(char_code));

console.log(language.lastIndexOf("a"));

var a = "a";
var b = "b";
console.log(a > b);

var b = "B";
console.log(a > b);

var a_index = language.indexOf("a");
var v_index = language.indexOf("v");
console.log(language.substr(a_index, 4));
console.log(language.substr(v_index, 4));

console.log(language.substring(a_index, 4));
console.log(language.substring(v_index, 4));

var fact_1 = "JavaScript is fun";
var fact_2 = "Kids like it too";
var compound_sentence = fact_1.concat(" and ", fact_2.toLowerCase());
console.log(compound_sentence);

console.log(fact_1[0]);
console.log(fact_2[0]);

var pi = 22 / 7;
pi = pi.toString();
console.log(pi.lastIndexOf("14"));


var box_number = (356).toString();
console.log(box_number);

box_number = +box_number;
console.log(typeof box_number);
box_number += "";
console.log(typeof box_number);
