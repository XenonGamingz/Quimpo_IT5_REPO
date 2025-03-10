//Declaring Variables
var location1 = 4;
var location2 = 5;
var location3 = 6;

//
var guess;
var hits = 0;
var guesses = 0;

var isSunk = false;

//Game Mechanics

while(isSunk == false){
    guess = prompt("🚨Enemy ships approaching, set coordinates and fire!🚨 (Guess from 0-6)");

    if (guess < 1 || guess > 6){
        alert("🚨Coordinates not  found, set the correct coordinates!🚨");
    }else {
        guesses = guesses + 1;
    
        if (guess == location1 || guess == location2 || guess == location3) {
            alert("Direct hit! Keep raining down salvos on them!")
            hits = hits + 1;

            if (hits == 3) {
                isSunk = true;
                alert("💥Enemy ship has been sunk!💥");
            }
        }else {
            alert("We missed them! Angle your shots effectively!");
        }
    }
}

var stats = "🎉Enemy ship has been sunk with " + guesses + " shots!🎉" + " Your total accuracy is: " + (3/guesses);

alert(stats);