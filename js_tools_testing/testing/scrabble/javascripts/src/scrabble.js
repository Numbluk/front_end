function Scrabble(word) {
  var score = 0;

  // check for word having a value
  if (!word) { return score; }

  word = word.toUpperCase();

  values = {
    AEIOULNRST: 1,
    DG: 2,
    BCMP: 3,
    FHVWY: 4,
    K: 5,
    JX: 8,
    QZ: 10
  };

  var letters = word.split("");
  for ( var i = 0; i < letters.length; i++) {
    for ( var letterGroup in values ) {
      if (letterGroup.indexOf(letters[i]) != -1) {
        score += values[letterGroup];
      }
    }
  }

  return score;
}
