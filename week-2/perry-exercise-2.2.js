/* 
Title: Perry-exercise 2.2.js
Author: Erica Perry
Date:8/14/2020
Description:Prototypes
*/


/*var header = require('../Erica-header.js');
console.log(header.display("Erica", "Perry", "exercise 2.2.js"));
console.log("\n") */


/*
 Expected output:

 FirstName LastName
 <AssignmentName>
 <Today's Date>

 The person's full name is '<fullname>.'
 The person's age is '<age>.'

*/

// start program

var person = 
{

getAge:function()

{
    return this.age;
}
};

// defining an object
var erica = Object.create(person,{

    "age":
    {
        "value":"25"
    },

 "fullName":

  {

 "value": "Erica Perry"

  }
})

erica.getAge()

console.log("The person's full name is '%s'",erica.fullName);
console.log( " The person's age is '%s'",erica.age);





// end program
