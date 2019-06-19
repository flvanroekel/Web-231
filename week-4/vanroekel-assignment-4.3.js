const header = require('../Vanroekel-header.js')
                       
console.log(header.display("Faye", "Van Roekel", "Assignment 4.3"));

/*
============================================
; Title:  Assignment 4.3 Filtering
; Author: Faye Van Roekel
; Date:   19 June 2019
; Description: Filtering 4.3 Assignment 
;===========================================
/*
  Expected output:

  FirstName LastName
  Exercise 4.3
  Today's Date

  -- DISPLAYING ARRAY ITEMS --
  Car
  Truck
  Motorcycle
  Airplane
  Bus

  -- SELECTED VALUE --
  Motorcycle

  -- SELECTED VALUE --
  Bus
*/

// start program

var vehicles = ["Car", "Truck", "Motorcycle", "Airplane", "Bus"];

function getValue(arr, val) {
    for (var k = 0; k < arr.length; k++) {
        if (arr[k] === val)
            console.log(arr[k]);
    }
}

//output
console.log("-- DISPLAYING ARRAY ITEMS --");
for (var x = 0; x < vehicles.length; x++) {
        console.log(vehicles[x]);
}

//new line
console.log("");

console.log(" -- SELECTED VALUE -- "); 
getValue(vehicles, "Motorcycle");

//new line
console.log("");

console.log(" -- SELECTED VALUE -- "); 
getValue(vehicles, "Bus");

/*=============================================
// End program*/