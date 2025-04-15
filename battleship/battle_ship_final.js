//Declaring Variables
var randomLoc = Math.floor(Math.random() * 5);
var shipLocations = [randomLoc, randomLoc + 1, randomLoc + 2]


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

    guess = parseInt(guess, 10);

    if (guess < 0 || guess > 6){
        alert("🚨Coordinates not  found, set the correct coordinates!🚨");
        continue;
    }

    guesses++;

    const hitIndex = shipLocations.indexOf(guess);
    
    if (hitIndex !== -1) {
            alert("🎯Direct hit! Keep raining down salvos on them!🎯")
            shipLocations.splice(hitIndex, 1);
            hits++;

            if (shipLocations.length === 0) {
                isSunk = true;
                alert("💥Enemy ship has been sunk!💥");
            }
        }else {
            alert("We missed them! Angle your shots effectively!");
        }
}


var accuracy = (guesses > 0 ? (hits / guesses) * 100 : 0).toFixed(2);

var stats = "🎉Enemy ship has been sunk with " + guesses + " shots!🎉" + " Your total accuracy is: " + accuracy + "%";

alert(stats);