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

function minusSeven(num) {
    return "10 - 7 = " + (num - 7)
}

console.log(minusSeven(10))

// =========================================