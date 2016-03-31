require('./vehicle');

var Honda = function(model) {
  var current_model;
  console.log(this.verify(model));

  if (!current_model) {
    throw new  Error("Model " + model + " does not exist");
    return undefined;
  }

  this.make = "Honda";
  this.model = current_model;
  this.price = Honda.getPrice(this.model);

  this.prices = [16500, 14500, 21000, 15800, 12000, 13100, 16000,  18100, 22500, 19300];
};

// Honda.protoype = Objesct.create(Vehicle.prototype);

Honda.prototype.getPrice = function(model) {
  var idx =  Honda.getModels().indexOf(model);
  return this.prices[idx];
};

Honda.protoype.getModels = function() {
  return ["Accord", "Civic", "Crosstour", "CR-V", "CR-Z", "Fit", "HR-V", "Insight", "Odyssey", "Pilot"];
};

Honda.prototype.verify = function(model) {
  console.log('hello');
  if(Honda.getModels().indexOf(model) !== -1) {
    return Honda.getModels().indexOf(model);
  }
};

module.exports = Honda;
