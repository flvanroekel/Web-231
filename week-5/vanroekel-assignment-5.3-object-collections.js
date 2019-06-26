const header = require('../Vanroekel-header.js')
                       
console.log(header.display("Faye", "Van Roekel", "Assignment 5.3"));

/*
============================================
; Title:  Assignment 5.3 Object Collections
; Author: Faye Van Roekel
; Date:   25 June 2019
; Modified By:
; Description: Assignment 5.3 Object Collections
;===========================================
*/
/*
Expected Output:
-- COMPOSERS --
  Last Name: Beethoven, Genre: Classical, Rating: 8
  Last Name: Mozart, Genre: Classical, Rating: 10
  Last Name: Bach, Genre: Classical, Rating: 9
  Last Name: Haydn, Genre: Classical, Rating: 6
  Last Name: Schubert, Genre: Classical, Rating: 5
*/

// start program
var composers = [
{
    firstName: "Ludwig van",
    lastName: "Beethoven",
    genre: "Classical",
    rating: 8
},
{
    firstName: "Wolfgang Amadeus",
    lastName: "Mozart",
    genre: "Classical",
    rating: 10
},
{
    firstName: "Johann Sebastian",
    lastName: "Back",
    genre: "Classical",
    rating: 9
},
{
    firstName: "Joseph",
    lastName: "Haydn",
    genre: "Classical",
    rating: 6
},
{
    firstName: "Franz",
    lastName: "Schubert",
    genre: "Classical",
    rating: 5
}
];

composers.forEach(function(composer){
    console.log(
        "Last Name " + composer.lastName + ", Genre: " + composer.genre + ", Rating: " + composer.rating
    );
})


