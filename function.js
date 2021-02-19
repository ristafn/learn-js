function myReusableFunction() {
    console.log("Hi World!")
}

myReusableFunction()

/* 
for(var i = 0; i <= 5; i ++) {
    console.log(myReusableFunction(i))
}
*/

function functionWithArgs(a, b) {
    console.log("1 + 2 = " + (a + b))
}

functionWithArgs(1,2)

// =========================================

var myGlobal = 10

function fun1() {
    oopsGlobal = 5
}

function fun2() {
    var output = ""

    if (typeof myGlobal != "undefined") {
        output += "myGlobal: " + myGlobal + "\n"
    }
    if (typeof oopsGlobal != "undefined") {
        output += "oopsGlobal: " + oopsGlobal
    }

    console.log(output)
}

fun1()
fun2()

// =========================================

// function with return value
function minusSeven(num) {
    return "10 - 7 = " + (num - 7)
}

console.log(minusSeven(10))

// =========================================

// function without return value
var sum = 0

function addFive() {
    sum += 5
}

// =========================================

function nexInLine(arr, item) {
    arr.push(item)
    return arr.shift()
}

var testArr = [1,2,3,4,5]

console.log("Before : " + JSON.stringify(testArr))
console.log(nexInLine(testArr, 6))
console.log("After : " + JSON.stringify(testArr))

// =========================================

// boolean return
function welcomeToBooleans() {
    return false
}

// =========================================

function trueOrFalse(wasThatTrue) {
    if (wasThatTrue) {
        return "Yes, that was true"
    }
    return "No, that was false"
}

console.log(trueOrFalse(true))

// =========================================

function testEqual(val) {
    if (val == 12) {
        return "Equal"
    } else if (val === '10') {
        return "Equal"
    }
    return "Not Equal"
}

console.log(testEqual(10))

// =========================================

// compare equality using ==
function compareEquality(a, b) {
    if (a == b) {
        return "Equal" 
    }
    return "Not Equal"
}

console.log(compareEquality(10, "10"))

// =========================================

function testNotEqual(val) {
    if (val != 99) {
        return "Not Equal"
    }
    return "Equal"
}

console.log(testNotEqual(10))

// =========================================

// !== or !, =, = mean not equal the value and the types of data
function testStrictNotEqual(val) {
    if (val !== 17) {
        return "Not Equal"
    }
    return "Equal"
}

console.log(testStrictNotEqual("17"))

// =========================================

// && and ||
function logicOp(val) {
    if (val >= 20 && val <= 21 || val >= 30 && val <= 31) {
        return true
    }
    return false
}

console.log(logicOp(30))

// =========================================

// switch case statements
function caseInSwitch(val) {
    var answer = ""
    switch (val) {
        case 1:
            answer = "Alpha"
            break;
        case 2:
            answer = "Beta"
            break
        case 3:
            answer = "Gamma" 
            break
        case 4:
            answer = "Delta"
            break
        default:
            return null
            break;
    }
    return answer
}

console.log(caseInSwitch(1))

// =========================================

function abTest(a, b) {
    if (a < 0 || b < 0) {
        return undefined
    }
    return Math.round(Math.pow(Math.sqrt(a) + Math.sqrt(b), 2))
}
console.log(abTest(2,2))

// =========================================

