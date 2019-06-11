const header = require('../Vanroekel-header.js')
                       
console.log(header.display("Faye", "Van Roekel", "Assignment 3.3"));

/*
============================================
; Title:  Assignment 3.3 Control Statements
; Author: Faye Van Roekel
; Modified by: 
; Date:   11 June 2019
; Description: Control Statements
;===========================================
*/

// start program
/*
  Expected output:

  FirstName LastName
  Exercise 3.3
  Today's Date

  // Expected output
  The enter key was pressed
*/


let eventKeyCode = 13


switch (eventKeyCode) {
    case 13:
        console.log("The enter key was pressed.");
        break;
    case 16:
        console.log("The shift key was pressed.");
        break;
    case 32:
        console.log("The spacebar key was pressed.");
        break;
    case 8:
        console.log("The backspace / delete key was pressed.");
        break;
    default:
        console.log("Unrecognized key.");
        break;
}
