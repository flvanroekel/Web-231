const header = require('../Vanroekel-header.js')
                       
console.log(header.display("Faye", "Van Roekel", "Exercise 2.3"));

// start program

/*
============================================
; Title:  Exercise 2.3 Function Properties
; Author: Faye Van Roekel
; Date:   05 June 2019
; Description: Check-In Marker for Exercise 2.3
;===========================================
*/

//function properties go here

myName.Faye = "Faye";
address.Sioux = "Sioux Center";
email.gmail = "fayevanroekel@gmail.com";

// function
function myName (){
    return myName.Faye;
}
function address (){
    return address.Sioux;
} 
function email (){
    return email.gmail;
};

//output

console.log('\n');
console.log("Hello " + myName()+ " Van Roekel");
console.log("My hometown is: " + address());
console.log("Here is my email address: " + email());

// end program