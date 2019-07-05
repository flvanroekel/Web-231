const header = require('../Vanroekel-header.js')
                       
console.log(header.display("Faye", "Van Roekel", "Exercise 6.4"));

/*
============================================
; Title:  Exercise 6.4 Nested Object Literals
; Author: Faye Van Roekel
; Date:   05 July 2019
; Description: Nested Object Literals
;===========================================
*/

// start program

var ticket = {
    id: 105,
    name: "Data Entry Screen will not Validate",
    dateCreated: new Date().toLocaleDateString('en-US'),
    priority: 1,
    personId: 100,
  
    person: {
      id: 100,
      firstName: "Bob",
      lastName: "Jones",
      jobTitle: "Programmer I"
    }
  };
  
  console.log("Ticket " + ticket.id + " was created on " + ticket.dateCreated
    + " and assigned to employee " + ticket.person.firstName + " " + ticket.person.lastName + " (" + ticket.person.jobTitle + ").");
  
  //end
