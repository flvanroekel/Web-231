const header = require('../Vanroekel-header.js')
                       
console.log(header.display("Faye", "Van Roekel", "Exercise 6.3"));

/*
============================================
; Title:  Exercise 6.3 Object Literals
; Author: Faye Van Roekel
; Date:   05 July 2019
; Description: Object Literals
;===========================================
*/
/*
  Expected output:

  FirstName LastName
  Exercise 6.3
  Today's Date

  {id: 101, name: Help Desk Support, requester: Bob Jones}
*/

// start program

//create object literal
var person = {
    id: 1010,
    name: "Ticket Support Request",
    requester: "Mary Smith"
  };
  
  console.log("id: " + person.id + ", name: " + person.name
    + ", requester: " + person.requester);
  
  //end
