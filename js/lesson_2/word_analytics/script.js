window.onload = function() {
    var test_str = "In the midway of this our mortal life, " +
                   "I found me in a gloomy wood, astray " +
                   "Gone from the path direct: and e'en to tell " +
                   "It were no easy task, how savage wild " +
                   "That forest, how robust and rough its growth, " +
                   "Which to remember only, my dismay " +
                   "Renews, in bitterness not far from death. " +
                   "Yet to discourse of what there good befell, " +
                   "All else will I relate discover'd there. " +
                   "How first I enter'd it I scarce can say, " +
                   "Such sleepy dullness in that instant weigh'd " +
                   "My senses down, when the true path I left, " +
                   "But when a mountain's foot I reach'd, where clos'd " +
                   "The valley, that had pierc'd my heart with dread, " +
                   "I look'd aloft, and saw his shoulders broad " +
                   "Already vested with that planet's beam, " +
                   "Who leads all wanderers safe through every way."
    test_str = test_str.replace(/,/g, '').replace(/\./g, '').replace(/:/g, '');
    console.log(test_str);

    str_arr = test_str.split(' ');
    console.log(str_arr);
    var word_counts = {
      total_words_count: 0,
      most_frequent: ""
    };

    word_counts.find_max_word = function(str_arr) {
      for(var i = 0; i < str_arr.length; i++) {
        if(this.hasOwnProperty(str_arr[i])) {
          this[str_arr[i]]++;
        } else {
          this[str_arr[i]] = 1;
        }
        this.total_words_count++;
      }

      var count = -1;
      var greatest = "";
      for (word_prop in this) {
        if (word_prop != "total_words_count" && typeof this[word_prop] != 'function') {
          if(this[word_prop] > count) {
            count = this[word_prop];
            greatest = word_prop;
          }
        }
      }
      this.most_frequent = greatest;
    }

    word_counts.log = function() {
      console.table(this);
      console.log(this.total_words_count);
      console.log(this.most_frequent);
    };

    word_counts.find_max_word(str_arr);
    word_counts.log();

};
