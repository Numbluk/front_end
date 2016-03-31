// var Vehicle = require('../src/vehicle');
var Honda = require ('../src/honda');

xdescribe('The Vehicle object', function() {
  xit("sets the make and model properties when an object is passed in", function() {
    var car = new Vehicle({make: 'Honda', model: 'Civic'});
    expect(car).toEqual(jasmine.objectContaining({
      make: 'Honda',
      model: 'Civic'
    }));
  });

  xit("returns a concatenated string with make and model", function() {
    var car = new Vehicle({make: 'Honda', model: 'Civic'});
    expect(car.toString()).toEqual("Honda Civic");
  });

  xit("returns a message when the horn is honked", function() {
    var car = new Vehicle({make: 'Honda', model: 'Civic'});
    expect(car.honkHorn()).toEqual("Beep beep!");
  });
});

describe('The Honda object', function() {
  xit("inherits the Vehicle prototype" , function() {
    // var vehicle = new Vehicle({make: 'honda', model: 'civic'});
    console.log('hello');
    var honda = new Honda('Civic');
    expect(vehicle.prototype.isPrototypeOf(honda)).toEqual(true);

  });

  it("sets the model property when a valid model is passed in" , function() {
    var civic = new Honda("Civic");
    expect(civic.make).toEqual("Civic");
  });

  xit("throws an error if an invalid model is passed in" , function() {
    var invalid = function() {
      new Honda("Nissan");
    };
    expect(invalid).toThrowError("Model Nissan does not exist");
  });

  xit("returns a list of valid models" , function() {
    expect(Honda.getModels().length).toBeDefined();
    expect(Honda.getModels()).toContain("Civic");
  });

  xit("calls getPrice when a new car is created" , function() {
    spyOn(Honda, "getPrice");
    var car = new Honda("Civic");
    expect(Honda.getPrice).toHaveBeenCalled();
    expect(Honda.getPrice).toHaveBeenCalledWith("Civic");
  });

  xit("returns a price for the passed in model" , function() {
    expect(Honda.getPrice("Civic")).toBeGreaterThan(0);
  });

  xit("returns a price less than 15000 when a Civic is created", function() {
    var car = new Honda("Civic");
    expect(car.price).toBeLessThan(15000);
  });

  xit("returns a price greater than 10000 when a CR-Z is created", function() {
    var car = new Honda("CR-Z");
    expect(car.price).toBeGreaterThan(10000);
  });
});
