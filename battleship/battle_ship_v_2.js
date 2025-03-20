//Declaring Variables
var randomLoc = Math.floor(Math.random() * 5);

var location1 = randomLoc;
var location2 = location1 + 1;
var location3 = location2 + 1;

//
var guess;
var hits = 0;
var guesses = 0;

var isSunk = false;

//Game Mechanics

while(isSunk == false){
    guess = prompt("🚨Enemy ships approaching, set coordinates and fire!🚨 (Guess from 0-6)");

    if (guess == null){
        alert("We may have won the battle, but not the war.");
        break;
    }

    if (guess < 0 || guess > 6){
        alert("🚨Coordinates not  found, set the correct coordinates!🚨");
    }else {
        guesses = guesses + 1;
    
        if (guess == location1 || guess == location2 || guess == location3) {
            alert("🎯Direct hit! Keep raining down salvos on them!🎯")
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

var accuracy = (guesses > 0 ? (hits / guesses) * 100 : 0).toFixed(2);

var stats = "🎉Enemy ship has been sunk with " + guesses + " shots!🎉" + " Your total accuracy is: " + accuracy + "%";

alert(stats);