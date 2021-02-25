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

// write higher order arrow functions
const realNumberArray = [4, 5.6, -9.8, 3.14, 42, 6, 8.34, -2]

const squareList = (arr) => {
    const squareIntegers = arr.filter(num => Number.isInteger(num) && num > 0).map(x => x * x)
    return squareIntegers
}

const squareIntegers = squareList(realNumberArray)
console.log(squareIntegers)

// default parameters
const increment = (function() {
    return function increment(number, value = 1) {
        return number + value
    }
})()
console.log(increment(5,2))
console.log(increment(5))

// rest operator (...)
/*
const sum = (function() {
    return function sum(x, y, z) {
        const args = [x,y,z]
        return args.reduce((a,b) => a+b, 0)
    }
})()
console.log(sum(1,2,3))
*/

const sum = (function() {
    return function sum(...args) {
        return args.reduce((a,b) => a+b, 0)
    }
})()
console.log(sum(1,2,3,4))

// spread operator
const arr1 = ['JAN', 'FEB', 'MAR', 'APR', 'MAY']
let arr2
(function() {
    arr2 = [...arr1]
    arr1[0] = 'potato'
})()
console.log(arr2)
// console.log(arr1)

