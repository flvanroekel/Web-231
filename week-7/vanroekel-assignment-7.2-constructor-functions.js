const header = require('../Vanroekel-header.js')
                       
console.log(header.display("Faye", "Van Roekel", "Exercise 7.2"));

/*
============================================
; Title:  Exercise 7.2 Constructor Functions
; Author: Faye Van Roekel
; Date:   10 July 2019
; Description: Constructor Functions
;===========================================
*/
/*
  Expected output:

  FirstName LastName
  Exercise 7.2
  Today's Date

  1 Thomas Edison Software Engineer
  2 Benjamin Franklin Programmer
  3 Nikola Tesla Project Manager
  4 Charles Babbage Product Manager
  5 Alexander Bell Business Analyst
*/


// start program

//create employee constructor object
function Employee(id, firstName, lastName, title) {
    this.id = id, this.firstName = firstName, this.lastName = lastName, this.title = title;
  }

  //array with 5 employee objects
  var employees = [
    new Employee(1, "Thomas", "Edison", "Software Engineer"),
    new Employee(2, "Benjamin", "Franklin", "Programmer"),
    new Employee(3, "Nikola", "Tesla", "Project Manager"),
    new Employee(4, "Charles", "Babbage", "Product Manager"),
    new Employee(5, "Alexander", "Bell", "Business Analyst")
  ];

//loop array and output results
  employees.forEach(function(value, index, array){
    console.log(value.id + " " + value.firstName + " " + value.lastName + " " + value.title);
  });


  
  //end
