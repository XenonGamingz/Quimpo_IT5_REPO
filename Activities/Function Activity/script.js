function whatShallIWear(temperature){
    if (temperature < 60) {
        console.log("Wear a Jacket.");
    } else if (temperature < 70){
        console.log("Wear a Sweater.");
    } else {
        console.log("Wear a T-Shirt.");
    }
}

whatShallIWear(50);
whatShallIWear(80);
whatShallIWear(60);