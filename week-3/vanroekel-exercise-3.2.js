const header = require('../Vanroekel-header.js')
                       
console.log(header.display("Faye", "Van Roekel", "Assignment 3.1"));

/*
============================================
; Title:  Assignment 3.2 Pattern Matching Functions
; Author: Faye Van Roekel
; Date:   11 June 2019
; Description: Pattern Matching Functions
;===========================================
*/

// start program

/*
  Expected output:

  FirstName LastName
  Exercise 3.2
  Today's Date

  // output from the match() function
  false
  true

  // output from the if...else blocks
  Truck and Car do not match!
  Bike and Bike do match!
  Four and Three do not match!
*/

//variables
var testVar1 = "Truck";
var testVar2 = "Car";
var testVar3 = "Bike";
var testVar4 = "Four";
var testVar5 = "Three";


//functions

function match(arg1, arg2) {
    if (arg1 === arg2)
        return true
    else 
        return false
}

function logMismatch(arg1, arg2) {
    console.log(arg1 + " and " + arg2 + " do not match!");
}

function logMatch(arg1, arg2) {
    console.log(arg1 + " and " + arg2 + " do match!");
}


//Output from match function
console.log(match("A", "B"));
console.log(match(2, 2));
console.log(match("") )


//"if conditional  "if else" statements else =" statements. Include checks for all 6 variables.
if (match(testVar1, testVar2)) {
    logMatch(testVar1, testVar2);
} else {
    logMismatch(testVar1, testVar2);
}

if (match(testVar3, testVar3)) {
    logMatch(testVar3, testVar3);
} else {
    logMismatch(testVar3, testVar3);
}

if (match(testVar4, testVar5)) {
    logMatch(testVar4, testVar5);
} else {
    logMismatch(testVar4, testVar5);
}
/*=============================================
// End program*/