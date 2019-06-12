const header = require('../Vanroekel-header.js')
                       
console.log(header.display("Faye", "Van Roekel", "Assignment 3.4"));

/*
============================================
; Title:  Assignment 3.4 Loops
; Author: Faye Van Roekel
; Modified by: 
; Date:   12 June 2019
; Description: Loops
;===========================================
*/

//for 10 iterations
//do some operation
// start program


var outerNumberValue = 2;

function match(a, b) {
  if(a === b){
    return true;
  } else {
    return false;
  }
}

function logMismatch(a, b) {
  console.log(a + " does not match " + b);
}

function logMatch(a, b) {
  console.log(a + " matches " + b);
}

for(var i = 1; i <= 10; i++) {
  var innerNumberValue = randomNumber(); 
  if(match(innerNumberValue, outerNumberValue)) {
    logMatch(innerNumberValue, outerNumberValue);
  } else {
    logMismatch(innerNumberValue, outerNumberValue);
  }
}

function randomNumber() {
  return Math.floor((Math.random() * 10) + 1)
}