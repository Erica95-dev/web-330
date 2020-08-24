/* 
Title: Perry-exercise 3.2.js
Author: Erica Perry
Date:8/23/2020
Description: The Factory Pattern
*/


/*var header = require('../Erica-header.js');
console.log(header.display("Erica", "Perry", "exercise 3.2.js"));
console.log("\n") */


/*
 Expected output:

 FirstName LastName
 <AssignmentName>
 <Today's Date>

 Oracle {
    username: '<username>',
    password: '<password>',
    server: '<server>',
    version: '<version>'
 }

 Informix {
    username: '<username>',
    password: '<password>',
    server: '<server>'
 }

*/

// start program
function Postgres(properties) {
    this.username = properties.username || "admin";
    this.password = properties.password || "s3cret";
    this.server = properties.server || "localhost:5432";
}

function MySql(properties) {
    this.username = properties.username || "ca-admin";
    this.password = properties.password || "ca-s3cret";
    this.server = properties.server || "localhost:8000";
    this.version = properties.version || "5.7";
}
// creating two new functions ( oracle & informix)
function Oracle(properties) {
    this.username = properties.username||"admin";
    this.password = properties.password||"o-s3cret";
    this.server = properties.server||"localhost:5432" ;
    this.version = properties.version ||"10g";
}

function Informix(properties) {
    this.username = properties.username||"admin";
    this.password = properties.password||"in-s3cret";
    this.server = properties.server|| "localhost:8000";
}

function DatabaseFactory() {}

DatabaseFactory.prototype.databaseClass = MySql;
DatabaseFactory.prototype.createDatabase = function(properties) {
}
if (properties.databaseType === "Postgres") {
        this.databaseClass = Postgres;

} 
if (properties.databaseType === "Mysql"){
        this.databaseClass = Mysql;

}
if (properties.databaseType === "Oracle") {
    this.databaseClass = Oracle;

} 
if (properties.databaseType === "Informix"){
    this.databaseClass = Informix;
    

    return new this.databaseClass(properties);
};

var postgresFactory = new DatabaseFactory();
var postgres = postgresFactory.createDatabase({
    databaseType: "Postgres",
    username: "admin",
    password: "SuperSecret"
});

var mySqlFactory = new DatabaseFactory();
var mySql = mySqlFactory.createDatabase({
    databaseType: 'MySQL',
    username: "default",
    password: "password"
});

var oracleFactory = new DatabaseFactory();
var oracle = oracleFactory.createDatabase({
    databaseType: "Oracle",
    username: "false",
    password: "however"
});


var informixFactory = new DatabaseFactory();
var informix = informixFactory.createDatabase({
    databaseType: 'Informix',
    username: "true",
    password: "eri"
});


console.log(oracle);
console.log(informix);





// end program

