function Vehicle() {
  if (!(this instanceof Vehicle)) {
    return new Vehicle();
  }
  return this;
}

Vehicle.prototype = {
  doors: 4,
  wheels: 4
};

var sedan = Vehicle();
var coupe = Vehicle();

coupe.doors = 2;
console.log(sedan.hasOwnProperty("doors"));
console.log(coupe.hasOwnProperty("doors"));

Coupe.prototype = new Vehicle();
Coupe.prototype.constructor = Coupe;
Coupe.prototype.doors = 2;
function Coupe() {
  if (!(this instanceof Coupe)) {
    return new Coupe();
  }
  return this;
}

Motorcycle.prototype = new Vehicle();
Motorcycle.prototype.constructor = Motorcycle;
function Motorcycle() {
  var object = this;
  if (!(object instanceof Motorcycle)) {
    object = new Motorcycle();
  }
  object.doors = 0;
  object.wheels = 2;
  return object;
}

var new_coupe = new Coupe();
var new_moto = new Motorcycle();
console.log(new_coupe);
console.log(new_moto);

console.log(new_coupe instanceof Coupe);
console.log(new_coupe instanceof Vehicle);
console.log(new_coupe instanceof Motorcycle);

function Sedan() {

}
Sedan.prototype = Object.create(Vehicle.prototype);

var sedan = new Sedan();
console.log(sedan instanceof Sedan);
console.log(sedan instanceof Vehicle);
