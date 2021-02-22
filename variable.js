// var
function ujiVar() {
    var i = "function scope"
    if (true) {
        var i = "block scope"
        console.log("Block scope i is :", i)
    }
    console.log("Function scope i is :", i)
}

ujiVar()

// let 
function ujiLet() {
    let i = "funtion scope"
    if (true) {
        let i = "block scope"
        console.log("Block scope i is :", i)
    }
    console.log("Function scope i is :", i)
}

ujiLet()

// const
function printManyTimes(str) {
    "use strict"
    const SENTENCE  = str + " is cool!"

    for (let i = 0; i < str.length; i += 2) {
        console.log(SENTENCE)
    }
}

printManyTimes("freeCodeCamp")

// mutate const
const s = [5,7,2]
function editInPlace() {
    "use strict"

    s[0] = 2
    s[1] = 5
    s[2] = 7

}

editInPlace()

console.log(s)

//prevent mutation
function freezeObj() {
    "use strict"
    const MATH_CONSTANTS = {
        PI: 3.14
    }

    Object.freeze(MATH_CONSTANTS)

    try {
        MATH_CONSTANTS.PI = 99
    } catch( ex ) {
        console.log(ex)
    }
    return MATH_CONSTANTS.PI
}

const PI = freezeObj()

console.log(PI)

// use arrow functions to write concise anonymous function
var magic = function() {
    return new Date()
}

/* 
or use this

var magic = () => {
    return new Date()
}

use this trick to write with one return value
const magic = () => new Date()

*/

// arrow function with parameter
var myConcat = (arr1, arr2) => arr1.concat(arr2)

console.log(myConcat([1,2],[3,4,5]))