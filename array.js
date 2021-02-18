var myArray = ["Quincy", 1]
// console.log(myArray)

// nested array
myArray = [["Bulls", 23], ["White Sox", 45]]

// access array with index
myArray = [50,60,70]
var myData = myArray[0]

// console.log(myData)

// modify array data with index
myArray = [18,64,99]
myArray[0] = 45
console.log(myArray)

// access array multidimensional data with index double bracket notations
myArray = [[1,2,3], [4,5,6]]
myData = myArray[1][0]

// console.log(myData)

// push()
myArray.push([10,9,8])
// console.log(myArray)

// pop() --> remove form last element in array
var removedFromMyArray = myArray.pop()
// console.log(myArray)

// shift() --> remove first element in array
var removedFromMyArray = myArray.shift()
// console.log(myArray)

// unshift --> add data to beginning element of array
myArray.unshift([1,2,3])
// console.log(myArray)