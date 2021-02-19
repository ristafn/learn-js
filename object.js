var myDog = {
    "name": "Quincy",
    "legs": 3,
    "tails": 2,
    "friends": []
}

console.log(myDog)

// =========================================

// access object properties with dot notation
var nameMyDog = myDog.name
console.log(nameMyDog)

// access object properties with bracket notation
var tailsMyDog = myDog["tails"]
console.log(tailsMyDog)

// access object properties with variable
var legsMyDog = "legs"
console.log(myDog[legsMyDog])

// modify object properties
myDog.name = "Domge"
console.log(myDog.name)

// add new properties to object
myDog["bark"] = "woof!"
console.log(myDog)

// delete properties in object
delete myDog.tails
console.log(myDog)

// using object for lookups
function phoneticLookup(val) {
    var result = ""

    // this object will replace the if statement or switch case for some case
    var lookup = {
        "alpha": "Adams",
        "bravo": "Boston",
        "charlie": "Chicago",
        "delta": "Denver",
        "echo": "Easy",
        "foxtrot": "frank"
    }
    result = lookup[val]
    return result
}

console.log(phoneticLookup("charlie"))

// =========================================


