/*
============================================
; Title:  Object.js
; Author: Alsaddig Ibrahim
; Date:  July 2 2019
; Modified by: Faye Van Roekel
; Description: Demonstrates how to define and output array values
;===========================================
*/

// Start Code


var person = {
  firstName : "Alsaddig",
  lastName  : "Ibrahim",
  age     : 37,
  eyeColor  : "Black", //added a comma
};

console.log("\nMy full Name "+ person.firstName + " " + person.lastName); //variable goes first - switched the order from firstName.person to person.firstName; also switched lastName.person to person.lastName
console.log("my last name "+ person.lastName +" my age is " + person.age) //added the variable person. to the 'lastName' and the 'age'

