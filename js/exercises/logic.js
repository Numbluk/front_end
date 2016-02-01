var apples = 3,
		bananas = 5;

bananas = "3";

if (apples === bananas) {
	console.log("They are equal.");
}
else { 
	if (apples == bananas ) {
		console.log("They are the same, but different types.");
	}
	else {
		console.log("Not strictly equal");
	}
}

apples = 3;
bananas = 3;
var are_equal = apples === bananas;

console.log(are_equal);

var bananas = undefined;

var either_or = apples || bananas;

console.log(either_or);

bananas = 1;
either_or = apples || bananas;
console.log(either_or);
either_or = bananas || apples;
console.log(either_or);

var last_name = "nimmo";

var family_message = last_name === "Riley" ? "You're part of the family!" : "You're not family.";
console.log(family_message);