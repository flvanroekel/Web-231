const header = require('../Vanroekel-header.js')
                       
console.log(header.display("Faye", "Van Roekel", "Assignment 5.2"));

/*
============================================
; Title:  Assignment 5.2 Built-In Functions
; Author: Faye Van Roekel
; Date:   25 June 2019
; Modified By:
; Description: Assignment 5.2 Built-In Functions
;===========================================
*/
/*
Expected Output:
Pizza
Steak
Shrimp
Hamburgers
IceCream
*/

// start program

var foods = ["Pizza", "Steak", "Shrimp", "Hamburgers", "Ice Cream"];

foods.forEach(function(food) {
    console.log(food);
});





