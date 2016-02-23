var apples = 3;
var bananas = 5;
if (apples == bananas) { console.log("apples == bananas!"); }

bananas = "3";
if (apples == bananas) { console.log("apples == bananas!"); }

if (apples === bananas) {
  console.log("apples === bananas!");
} else {
  if (apples == bananas) {
    console.log("apples == bananas but are different types");
  } else {
    console.log("not strictly equal");
  }
}

apples = 3;
bananas = 3;
var are_equal = apples === bananas;
console.log(are_equal);

apples = 3;
bananas = undefined;
var either_or = apples || bananas;
console.log(either_or);

bananas = 1;
either_or = apples || bananas;
console.log(either_or);
either_or = bananas || apples;
console.log(either_or);

var last_name = "Nimmo";
var family_message = last_name === "Nimmo" ? "You're part of the family!" : "You're not part of the family";
console.log(family_message);
