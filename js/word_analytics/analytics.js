	var poem = "In the midway of this our mortal life, \
I found me in a gloomy wood, astray \
Gone from the path direct: and e'en to tell \
It were no easy task, how savage wild \
That forest, how robust and rough its growth, \
Which to remember only, my dismay \
Renews, in bitterness not far from death. \
Yet to discourse of what there good befell, \
All else will I relate discover'd there. \
How first I enter'd it I scarce can say, \
Such sleepy dullness in that instant weigh'd \
My senses down, when the true path I left, \
But when a mountain's foot I reach'd, where clos'd \
The valley, that had pierc'd my heart with dread, \
I look'd aloft, and saw his shoulders broad \
Already vested with that planet's beam, \
Who leads all wanderers safe through every way."

poem = poem.replace(/,/g,"").replace(/\./g,"").replace(/:/g,"");
var separated_words = poem.split(" ");

var word_counts = new Object();
word_counts.largest_count = 0;
word_counts.largest_word = "";

word_counts.count_words = function(words) {
	for (var i = 0; i < words.length; i++) {
		word = words[i].toLowerCase();
		if(this.hasOwnProperty(word)) {
			this[word]++;
			console.log(this[word[i]]);
		} else {
			this[word] = 1;
		}
	}
}

word_counts.get_largest = function() {
	for (var property in this) {
		if (this[property] > this.largest_count) {
			this.largest_count = this[property];
			this.largest_word = property;
	 	}
	}
};

word_counts.count_words(separated_words);
word_counts.get_largest();
console.table(word_counts);
console.log("Total words: " + separated_words.length);
console.log("Most frequent word: " + word_counts.largest_word);
console.log(word_counts.largest_word + " used " + word_counts.largest_count + " times");