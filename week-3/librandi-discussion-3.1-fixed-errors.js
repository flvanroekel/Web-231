/*
============================================
; Title:  librandi-discussion-3.1.js
; Author: Tyler Librandi
; Date:   12 June 2019
; Modified by: Faye Van Roekel
; Description: Program that demonstrates a control statement
;===========================================
*/
// Output:
console.log ("I'm thinking of a number between 1 and 10. What is it?" + '\n')


//renamed var 'n' to var 'guess'
var guess = 1;


//added 'guess' in place of  'n' each time; also added parentheses. deleted the curly bracket

while (guess !== 9) {
	console.log(guess);
	guess++;
}

//added parentheses and changed the 'n' to a 'guess' in 2 places below and deleted the curly bracket

if (guess == 9) {
	console.log(guess + " This is the number!");
}

//added parentheses and changed the 'n' to a 'guess' in 2 places below and deleted the curly bracket
//To complete the list numbered 1 through 10, 10 must is added individually after 9 has been found
while (guess < 10) {
	guess++;
	console.log(guess);
}
