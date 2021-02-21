function checkEqual(a, b) {
    return a === b ? true : false
}

console.log(checkEqual(2,2))

// nested ternary
function checkSign(num) {
    return num > 0 ? "positive" : num < 0 ? "negative" : "zero"
}

console.log(checkSign(0))