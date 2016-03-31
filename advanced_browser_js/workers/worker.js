self.addEventListener('message', function(e) {
  data = e.data;
  var number = data.number;
  var digits = data.digits;

  var biggest = greatestProduct(number, digits);
  postMessage(biggest);
}, false);

function greatestProduct(number, digits) {
  // number of combinations based on digits = number length - digits + 1
  var combinations = number.length - digits + 1;
  var greatest = -1;

  for ( var i = 0; i < combinations; i++ ) {
    var numbers_arr = number.substr(i, 13).split("");
    var product = 1;
    for( var j = 0; j < numbers_arr.length; j++) {
      product *= +numbers_arr[j];
    }
    if ( product > greatest ) { greatest = product; }
  }

  return greatest;
}
