function FullName(FirstName, MiddleName, LastName) {
    fullName = FirstName + MiddleName + LastName;
    return fullName;
}

var governmentName = FullName(' Xenon', '_', 'Gamingz')
var governmentName = FullName(' Luke Uriel', ' G.', ' Quimpo')

console.log("My Full name is" + governmentName)