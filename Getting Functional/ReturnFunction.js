function FullName(FirstName, MiddleName, LastName) {
    fullName = FirstName + MiddleName + LastName;
    return fullName;
}

var governmentName = FullName(' Xenon', '_', 'Gamingz')

console.log("My Full name is" + governmentName)