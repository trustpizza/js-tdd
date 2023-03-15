const calculator = {
    add: (a,b) => addition(a,b),
    subtract: (a,b) => subtraction(a,b),
    multiply: (a,b) => multiplication(a,b),
    divide: (a,b) => division(a,b)
}

function addition(a,b) {
    return a + b;
}

function subtraction(a,b) {
    return a - b;
}

function multiplication(a,b) {
    return a * b;
}

function division(a,b) {
    return a / b;
}

module.exports = calculator;