// Complete the js code
function Car(make, model) {
	constructor(make,model){
	this.make=make;
	this.modal=model;
	}

	getMakeModel(){
		return (`${this.make} ${this.model}`)
	}
}

function SportsCar extends Car(make, model, topSpeed) {
	constructor(make,model,topSpeed){
		super(make,model)
		this.topSpeed=topSpeed;
	}

	getTopSpeed(){
		return (this.topSpeed)
	}
}

// Do not change the code below
window.Car = Car;
window.SportsCar = SportsCar;
