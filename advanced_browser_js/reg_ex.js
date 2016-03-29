var str = "123, easy as 123";
str.replace(/\d+/, 'ABC');

function contains(str) {
  if ( str.search(/\b[A-Z]/) != -1 ) { return true; }
  return false;
}

function removeTrailing(str) {
  return str.replace(/^\s+|\s+$/, '');
}
var start =  ' hello';
var end = 'hello ';
var both = ' hello ';
console.log(removeTrailing(start));
console.log(removeTrailing(end));
console.log(removeTrailing(both));

str = "$ plus $$ equals $$$";
console.log(str.match(/\$/g).length);

function fiveToSeven(str) {
  if ( /\D{5,7}/.test(str) ) {
    return true;
  } else {
    return false;
  }
}
console.log(fiveToSeven("Hen"));
console.log(fiveToSeven("She'll be coming 'round the mountain when she comes"));

var query = "Hen";
var source = "She'll be coming 'round the mountain when she comes";
query = new RegExp(query, 'i');
console.log(query.test(source));

str = "H%*e(ll)o";
console.log(str.match(/[a-z]+/ig).join(''));

function hasSingleOrDoubleQuotes(str) {
  var regex = /(['"])\w+\1/;
  console.log(regex.test(str));
}
hasSingleOrDoubleQuotes("'dave'");
hasSingleOrDoubleQuotes('"hello"');
hasSingleOrDoubleQuotes('steve');

function validPhoneNumber(str) {
  if ( /^\(\d{3}\)\s\d{3}\-\d{4}$/.test(str) ) { return true; }
  return false;
}
console.log(validPhoneNumber("(222) 555-1212"));
console.log(validPhoneNumber("(222) 555-1212x150"));
console.log(validPhoneNumber("1-(222) 555-1212"));

function allValidPhoneNumber(str) {
  if ( /\(\d{3}\)\s\d{3}\-\d{4}/.test(str) ) { return true; }
  return false;
}
console.log(allValidPhoneNumber("(222) 555-1212"));
console.log(allValidPhoneNumber("(222) 555-1212x150"));
console.log(allValidPhoneNumber("1-(222) 555-1212"));
