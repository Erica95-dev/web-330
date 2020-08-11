/* 
Title: excercise 1.4
Author: Erica Perry
Date:8/9/2020
Modified: Erica Perry
Description: Duck typing
*/

/*
const header = require('./header.js');
console.log(header.display("Erica", "Perry", "excerise 1.4"));
console.log('\n');
*/



/*
 Expected output:

 FirstName LastName
 <AssignmentName>
 <Today's Date>

 Car added to the racetrack!
 Truck added to the racetrack!
 Jeep added to the racetrack!

 -- The following vehicles have been added to the racetrack --
 Truck: <Model>
 Car: <Model>
 Jeep: <Model>

*/

// start program

function Car(model){
    this.model= model;
}
Car.prototype.start=function(){
    console.log("Car added to the racetrack!");
};

function Truck(model,year){
    this.model = model;
    this.year = year;
}
Truck.prototype.start = function(){
    console.log("Truck added to the racetrack!");
};

function Jeep(model,year,color){
    this.model = model;
    this.year = year;
    this.color = color;
}
Jeep.prototype.start = function(){
    console.log("Jeep added to the racetrack!");

}
  var racetrack = []; 

function driveIt(vehicle)
{
 vehicle.start();

 racetrack.push(vehicle);
}

var kia = new Car("kia");
var tesla = new Truck("tesla","2018");
var wrangler = new Jeep("wrangler", "2020", "blue");

 console.log("");

driveIt(kia);
driveIt(tesla);
driveIt(wrangler);

// vehicle types
console.log('\n-- The following vehicles have been added to the racetrack --');
for(var x = 0; x < racetrack.length; x++)
    
{
    console.log(racetrack[x].constructor.name + " : " + racetrack[x].model);
}



// end program
