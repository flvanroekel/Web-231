const header = require('../Vanroekel-header.js')
                       
console.log(header.display("Faye", "Van Roekel", "Assignment 4.2"));

/*
============================================
; Title:  Assignment 4.2 Arrays
; Author: Faye Van Roekel
; Date:   18 June 2019
; Description: Arrays 4.2 Assignment 
;===========================================
*/
/*
Strawberries
Pears
Peaches
Pineapples
Apples
*/

// start program

var fruits = ["Strawberries", "Pears", "Peaches", "Pineapples", "Apples"];

function getFruit(arr){
    for(var i = 0; i < arr.length; i++) {
        console.log(arr[i])
    }
}

getFruit(fruits);


/*=============================================
// End program*/