///new class Vehicle
class Vehicle {
    constructor(make, model, year){
        if(typeof make != 'string'){
           throw new Error('Invalid input of make');
        }
        if(typeof model != 'string'){
            throw new Error('Invalid input of model');
        }
        if(!Number.isFinite(year) || year < 1886 ){
            throw new Error('Invalid input of year, Please enter year number after 1886');
        }

        this.make = make;
        this.model = model;
        this.year = year;
    }

    honk(){
        console.log('Beep');
    }

    toString(){
        const {make, model, year} = this;
        console.log ('The vehicle is a ' + make + ' ' + model + ' from ' + year + '.');
    }
}

/////new class Car
class Car extends Vehicle{
   constructor (make, model, year){
    super(make, model, year);
   }
     
    numWheels(){
        console.log('the number of wheels is 4');
        return 4;
    }
}

/////new class MotorCycle
class MotorCycle extends Vehicle{
    constructor (make, model, year){
     super(make, model, year);
    }
      
    numWheels(){
         console.log('the number of wheels is 2');
         return 2;
    }

    revEngine(){
        console.log('VROOM!')
        return 'VROOM!';
    }

 }

 /////new class Garage
 class Garage{
     constructor(capacity){
         if(!typeof capacity == 'number')
         this.capacity = capacity;
         this.addVeh = [];
     }
     

     add(newVehicle){
        if (!(newVehicle instanceof Vehicle)){
            return "Only vehicles are allowed in here!";
        }
        else if(this.addVeh.length >= this.capacity){
            return "Sorry, we're full.";
        }
        else
        {
            this.addVeh.push(newVehicle);
            return 'Vehicle has been added!';
        }
     }

     vehicle(){
         return addVeh;
     }
 }

 
/////class Vehicle
const myFirstVehicle = new Vehicle('Honda', 'Truck' , 1900);
myFirstVehicle.toString();
myFirstVehicle.honk();

/////class Car
const car1 = new Car('Toyota', 'Sedan', 2010);
car1.toString();
car1.numWheels();

/////class MotorCycle
let myFirstMotorcycle = new MotorCycle("Honda", "Nighthawk", 2000);
myFirstMotorcycle.toString();
myFirstMotorcycle.revEngine();
myFirstMotorcycle.numWheels();

/////class Garage
let garage = new Garage(2);
console.log(garage.vehicle());