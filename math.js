// round()
console.log(Math.round(1.2))

// floor()
function randomWholeNum() {
    return Math.floor(Math.random() * 10)
}

console.log(randomWholeNum())

// random range
function randomRange(myMin, myMax) {
    return Math.floor(Math.random() * (myMax - myMin + 1)) + myMin
}

var myRandom = randomRange(5, 15)

console.log(myRandom)