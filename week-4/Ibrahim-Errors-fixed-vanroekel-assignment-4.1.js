const header = require('../Vanroekel-header.js')
                       
console.log(header.display("Faye", "Van Roekel", "Assignment 4.1"));

/*
============================================
; Title:  Assignment 4.1 Ibrahim Errors fix assignment
; Author: Alsaddig Ibrahim
; Date:   19 June 2019
; Modified by:  Faye Van Roekel
; Description: 4.1 Error Fix Array Assignment 
;===========================================
*/

// start program

// array of numerical values
const  fruits=["Banana", "Orange", "Apple", "Mango"];

// iterate over the array and output the results
console.log('\n-- DISPLAYING Fruits ARRAY --\n')

for (let x = 0; x < fruits.length; x++) {
  console.log(x+1 + '-  [' + fruits[x]+']')

}



/*=============================================
// End program*/