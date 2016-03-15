// var total = 50;
// var incrementBy = function(arg) {
//   total += arg;
// };
//
// console.log(total); // 50
// incrementBy(15);
// console.log(total); // 65
//
// var incrementBy = function(arg) {
//   var total = 0;
//   total += arg;
// };
//
// console.log(total); // 65
// incrementBy(15);
// console.log(total); // 65
//
// var increment = 15;
// console.log(increment); // 15
// var incrementBy = function(increment) {
//   total += increment;
// };
// incrementBy(increment);
// console.log(total); // 80
// incrementBy();
// console.log(total); // NaN

// var fruit = "apple";
// var setFruitType = function() {
//   fruit = "banana";
// };
// setFruitType();
// console.log(fruit); // banana
//
// var fruit = "apple";
// var setFruitType = function() {
//   var fruit = "banana";
// };
// setFruitType();
// console.log(fruit); // apple
//
// var groceries = {
//   apples: 0.99,
//   coffee: 7.99,
//   orange_juice: 2.99
// };
// var getTotal = function(items) {
//   var total = 0;
//   for(var item in items) {
//     total += items[item];
//   }
//   items.total = total;
// };
//
// getTotal(groceries);
// console.log(groceries.total);

// var temps = [65, 59, 63, 64];
// console.log(temps);
// var removeLastTemperature = function(temperatures) {
//   temperatures.pop();
// };
// removeLastTemperature(temps);
// console.log(temps);

var temps = [65, 59, 63, 64];
var average = function(values) {
  var total = 0;
  for(var i = 0; i < this.length; i++) {
    total += this[i];
  }
  return total / this.length;
};
console.log(average(temps));
console.log(average.call(temps));
console.log(average.apply(temps));

var averageTemperature = average.bind(temps);
console.log(averageTemperature());
temps.push(115);
console.log(averageTemperature());
temps.average = average;
console.log(temps.average());
