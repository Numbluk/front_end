// Then Almitra spoke again and said, "And what of Marriage, master?"
// And he answered saying:
// You were born together, and together you shall be forevermore.
// You shall be together when white wings of death scatter your days.
// Aye, you shall be together even in the silent memory of God.
// But let there be spaces in your togetherness,
// And let the winds of the heavens dance between you.
// Love one another but make not a bond of love:
// Let it rather be a moving sea between the shores of your souls.
// Fill each other's cup but drink not from one cup.
// Give one another of your bread but eat not from the same loaf.
// Sing and dance together and be joyous, but let each one of you be alone,
// Even as the strings of a lute are alone though they quiver with the same music.
// Give your hearts, but not into each other's keeping.
// For only the hand of Life can contain your hearts.
// And stand together, yet not too near together:
// For the pillars of the temple stand apart,
// And the oak tree and the cypress grow not in each other's shadow.

var x = `Then Almitra spoke again and said, "And what of Marriage, master?" And he answered saying: You were born together, and together you shall be forevermore. You shall be together when white wings of death scatter your days. Aye, you shall be together even in the silent memory of God. But let there be spaces in your togetherness, And let the winds of the heavens dance between you. Love one another but make not a bond of love: Let it rather be a moving sea between the shores of your souls. Fill each other's cup but drink not from one cup. Give one another of your bread but eat not from the same loaf. Sing and dance together and be joyous, but let each one of you be alone, Even as the strings of a lute are alone though they quiver with the same music. Give your hearts, but not into each other's keeping. For only the hand of Life can contain your hearts. And stand together, yet not too near together: For the pillars of the temple stand apart, And the oak tree and the cypress grow not in each other's shadow.`;

x = x.replace(/"/g, '').replace(/:/g, '').replace(/\./g, '').replace(/,/g, '');

var words_as_arr = x.split(' ');

var word_count = {};

for (var i = 0; i < words_as_arr.length; i++) {
    var word_to_test = words_as_arr[i];
    
    var capitalized = word_to_test.charAt(0).toUpperCase() + word_to_test.substr(1, word_to_test.length - 1);
    var decapitalized = word_to_test.charAt(0).toLowerCase() + word_to_test.substr(1, word_to_test.length - 1);
    
    if (word_count.hasOwnProperty(capitalized)) {
        word_count[capitalized]++;
    } else if (word_count.hasOwnProperty(decapitalized)) {
        word_count[decapitalized]++;
    } else {
        word_count[word_to_test] = 1;
    }
}

console.log(word_count);

// check if capitalized
// check:
//      word_to_test 
// yes - add as capitalized
// no - add as capitalized