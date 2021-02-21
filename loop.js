// iterate with while loop
var myArray = []

var i = 0
while(i < 5) {
    myArray.push(i)
    i++
}

console.log(myArray)

// iterate with for loop
var myArray2 = []

for (var i = 1; i < 6; i++) {
    myArray2.push(i)
}

console.log(myArray2)

// iterate odd number with for loop
var myArray3 = []

for (var i = 1; i < 10; i += 2) {
    myArray3.push(i)
}

console.log(myArray3)

// iterate array element
var myArray4 = [2, 3, 4, 5, 6]
var myTotal = 0

for (var i = 0; i < myArray4.length; i++) {
    myTotal += myArray4[i]
}

console.log(myTotal)

// nested for loop
function multiplyAll(arr) {
    var product = 1
    
    for (var i = 0; i < arr.length; i++) {
        for (var j = 0; j < arr[i].length; j++) {
            product *= arr[i][j]
        }
    }
    return product
}

var product = multiplyAll([[1,2],[3,4],[5,6,7]])

console.log(product)