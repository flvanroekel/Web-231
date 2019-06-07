const header = require('../Vanroekel-header.js')
                       
console.log(header.display("Faye", "Van Roekel", "Assignment 2.4"));

/*
============================================
; Title:  Assignment 2.4 Functions
; Author: Faye Van Roekel
; Date:   06 June 2019
; Description: Functions 2.4 Assignment
;===========================================
*/

// start program

firstName = "Faye";
lastName = "Van Roekel";
year = "2019";
month = "June";
date = "6";
var num = 90;
var n = num.toFixed(1);  // one fixed decimal position
var x = "45";
x.toString();
var y = "50000.00";



// function

function full_name () {
    return(firstName + " " + lastName)
}

function date_writer () {
    return(month + " " + date + ", " + year)
}

function formatNumber () {
    return(num.toFixed(1))
}
        
function convertToInt(s) {
    return(parseInt(x))
}

function convertToFloat(s) {
    return(parseFloat(y))
}

//output

console.log ('\n');
console.log ("Hello my name is " + full_name() + "!")
console.log ("Today's date is " + date_writer() + " and the current temperature is " + formatNumber(1) + ".")
console.log ("I am " + parseInt(x) + " years old, and my savings account goal is " + parseFloat(y) + " dollars.")

// end program
