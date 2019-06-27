const header = require('../Vanroekel-header.js')
                       
console.log(header.display("Faye", "Van Roekel", "Assignment 5.4"));

/*
============================================
; Title:  Assignment 5.4 Filtering Reducing Complex Data Structures
; Author: Faye Van Roekel
; Date:   26 June 2019
; Modified By:
; Description: Assignment 5.4 Filtering Reducing Complex Data Structures
;===========================================
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

//Rating and Last Name

var ratings = composers.map(function(composer){
    return "Rating: " + composer.rating + "\nComposer: " + composer.lastName + "\n";
});

//Genre and Last Name

var genre = composers.map(function(composer){
    return "Genre: " + composer.genre + "\nComposer: " + composer.lastName + "\n";
});


//output Composer by Rating
console.log("--COMPOSER BY RATING--");
    ratings.forEach(function(value, index, array) {
console.log(value);
})


//output Composer By Genre
console.log("--COMPOSER BY GENRE--");
genre.forEach(function(value, index, array){
    console.log(value);
});

//end program
