/* 
Title: Perry-exercise 3.3.js
Author: Erica Perry
Date:8/23/2020
Description: The singleton pattern
*/


/*var header = require('../Erica-header.js');
console.log(header.display("Erica", "Perry", "exercise 3.3.js"));
console.log("\n") */



/*
 Expected output:

 FirstName LastName
 <AssignmentName>
 <Today's Date>

 Same database instance? true

*/

// start program

var DatabaseSingleton = (function() {  
    var instance;
    function createInstance() {
        var postgresDatabase = new Object("Database instance initialized!");
        return postgresDatabase; }

return {
  getInstance: function() {
      if (!instance) {
          instance = createInstance();
   }
  return instance; 
   
    }
   
 } 

})();

function databasaSingletonTest(){
// database instances created
   var oracle = DatabaseSingleton.getInstance();
   var postgres = DatabaseSingleton.getInstance();
// equals to
   console.log("Same database instance? %s", oracle === postgres);
}

databasaSingletonTest();
// end program
