var car = {
  brand: 'Honda',
  type: 'Civic',
  year: '2016'
};

console.log(car['brand']);
console.log(car.brand);

for(var property in car) {
  console.log(car[property]);
}

var arr_of_properties = Object.keys(car);
console.log(arr_of_properties);


// Three ways too initialize and object
var dog = {}; // object literal notation
console.log(dog);
console.log(dog instanceof Object); // true

// cat is now and instance of object
// Note that cat is an instance of whatever new SomeObj() is
var cat = new Object();
console.log(cat);
console.log(cat instanceof Object); // true

// Has prototype of given (obj)
// mouse does not inherit properties, but has the given prototype
var mouse = Object.create(null);
console.log(mouse);
console.log(Object.getPrototypeOf(mouse)); // null
console.log(mouse instanceof Object); // false


// Define objects in object literal notation:
var animal = {
  size: 2,
  feet: 4,
  run: function() { return 'fast'; }
};

var plane = {};
plane.name = 'bomber';
plane['weight'] = 3000;
plane.fly = function() { return "You're flying!" };


// Show shorthand for defining functions in object literal notation
var shoot = {
  bang() { return 'bang!'; }
}
console.log(shoot.bang());


// Create a constructor function of a Car
// Note that is a FUNCTION. Not an object!
function Car(name, type, year) {
  this.name = name;
  this.type = type;
  this.year = year;
}

var accord = new Car('Honda', 'Accord', 1999); // New instance

// Compared with Object.create(), Object.create() does not create an instance of the object specified. Instead, it is the prototype that the object will derive from.

function Ferrari() {
  Car.call(this); // call super constructor
}

Ferrari.prototype = Object.create(Car.prototype);
Ferrari.prototype.constructor = Ferrari;

var fast = new Ferrari();

console.log(Object.getPrototypeOf(truck));
console.log(truck);
console.log(truck.year);
