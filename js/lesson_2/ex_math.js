function convertToDegrees(radians) {
  return radians * 180 / Math.PI;
}

function makeSurePositive(num) {
  return Math.abs(num);
}

function getSQRT(num) {
  return Math.sqrt(num);
}

function getPower(base, exp) {
  return Math.pow(base, exp);
}

var a = 50.72,
    b = 49.2,
    c = 49.86;

a = Math.floor(a);
b = Math.ceil(b);
c = Math.round(c);

function getRandoms(lower, upper) {
  return Math.round(Math.random() * (upper - lower) + lower);
}
