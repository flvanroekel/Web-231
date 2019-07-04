const header = require('../Vanroekel-header.js')
                       
console.log(header.display("Faye", "Van Roekel", "Exercise 6.2"));

/*
============================================
; Title:  Exercise 6.2 Exception Handling
; Author: Faye Van Roekel
; Date:   03 July 2019
; Description: Exception Handling
;===========================================
*/
/*
  Expected output:

  FirstName LastName
  Exercise 6.2
  Today's Date

  Catch clause: <your custom message goes here>
  Finally clause reached...
*/
// start program

try {

    var x = 5;

    var y = 10;

    var sum = x + y;

if (sum > 10) throw "new Error in program";

    console.log(sum);

} catch (err) {

    console.log("Catch clause: " + err);

} finally {

    console.log("Finally clause: Program has been completed...");

}


//end
