function Car(make, model) {
  this.make = make;
  this.model = model;
}

Car.prototype.getMakeModel = function() {
  return `${this.make} ${this.model}`;
};

function SportsCar(make, model, topSpeed) {
  // Call Car constructor with make and model
  Car.call(this, make, model); // inheritance of properties
  this.topSpeed = topSpeed;
}


SportsCar.prototype = Object.create(Car.prototype);

SportsCar.prototype.constructor = SportsCar;


SportsCar.prototype.getTopSpeed = function() {
  return this.topSpeed;
};


window.Car = Car;
window.SportsCar = SportsCar;
