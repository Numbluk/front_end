function NewArray() {}
NewArray.prototype = Object.create(Object.getPrototypeOf([]));
NewArray.prototype.first = function() { return this[0]; };

var new_arr = new NewArray(),
    old_arr = new Array();

old_arr.push(5);
new_arr.push(5);
new_arr.push(2);
new_arr.push(2);
console.log(new_arr.first());
console.log(typeof old_arr.first);


var obj = { name: "Obj" };
Object.defineProperties(obj, {
  log: {
    value: function() {
      console.log(this.name);
    },
    writable: false
  }
});

obj.log();
obj.log = function() { console.log("Hello"); };
obj.log();

var date = {
  year: 2016,
  month: "March",
  events: ["elections", "web dev"],
  weather: {
    temp: 87
  },
  hello: function() {
    console.log("Hello, world");
  }
};

Object.freeze(date);
date.year = 2000;
date.month = "April";
date.events = ['hello', 'world'];
date.weather.temp = "55";
date.hello = function() { console.log("Whaaat"); };

console.log(date.year);
console.log(date.month);
console.log(date.events);
console.log(date.weather.temp);
date.hello();

console.log(Object.isFrozen(date.events));
console.log(Object.isFrozen(date.hello));
