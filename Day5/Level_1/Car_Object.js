//Car Object: Create an object representing a car (brand, model, year).
//Add a method to the object that logs "This car is a [brand] [model]".

let car = {brand:"Toyota",model:"Corolla",year:"2020",
    presentation : function() {
    return "This car is a " + this.brand + " " + this.model;
  }};
console.log(car.presentation())