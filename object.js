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

// =========================================

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

// testing the properties in object
var myObj = {
    gift: "pony",
    pet: "kitten",
    bed: "sleigh"
}

function checkObj(checkProp){
    if (myObj.hasOwnProperty(checkProp)) {
        return myObj[checkProp]
    } else {
        return "Not Found"
    }
}

console.log(checkObj("gift"))
// =========================================

// manipulating complex object
var myMusic = [
    {
        "artist": "Billy Joel",
        "title": "Piano Man",
        "release_year": 1973,
        "formats": [
            "CD",
            "8T",
            "LP"
        ],
        "gold": true
    },
    {
        "artist": "Beau Carnes",
        "title": "Cereal Man",
        "release_year": 2003,
        "formats": [
            "Youtube video"
        ],
        "gold": true
    }
]

// =========================================

// accessing nested object
var myStorage = {
    "car": {
        "inside": {
            "glove box": "maps",
            "passaenger seat": "crumbs"
        },
        "outside": {
            "trunk": "jack"
        }
    }
}

var gloveBoxContents = myStorage.car.inside["glove box"]
console.log(gloveBoxContents)

// =========================================

// accessing nested array object
var myPlants = [
    {
        type: "flowers",
        list: [
            "rose",
            "tulip",
            "dandelion"
        ]
    },
    {
        type: "trees",
        list: [
            "fir",
            "pine",
            "birch"
        ]
    }
]

var secondTree = myPlants[1].list[1]
console.log(secondTree)

// =========================================




