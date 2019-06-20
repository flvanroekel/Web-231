const header = require('../Vanroekel-header.js')
                       
console.log(header.display("Faye", "Van Roekel", "Assignment 4.4"));

/*
============================================
; Title:  Assignment 4.4 Predicates
; Author: Faye Van Roekel
; Date:   19 June 2019
; Description: Predicates 4.4 Assignment 
;===========================================
*/

// start program

var states = ["Alabama", "Nebraska", "Iowa", "California", "Nevada"];

function getValue(index, val) {
    for (var k = 0; k < states.length; k++) {
        if (index[k] === val) {
            console.log(index[k]);
        }        
    }
    return states.sort();
}

//new line
console.log("");

//output
console.log("-- ORIGINAL ARRAY --");
    for (var x = 0; x < states.length; x++) {
        console.log(states[x]);
}

//new line
console.log("");

console.log("-- SORTED ARRAY --");
    for (var s = 0; s < states.length; s++) {
        var filteredStates = states.filter(getValue);
  console.log(filteredStates[s]);
    }


//new line
console.log("");

console.log(" -- SELECTED VALUE -- "); 
getValue(states, "Iowa");

/*=============================================
// End program*/