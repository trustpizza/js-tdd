const calculator = require("./calculator");

test("Add 8 and 7", () => {
    expect(calculator.add(8,7)).toBe(15)
})

test("Subtract 7 from 8", () => {
    expect(calculator.subtract(8,7)).toBe(1)
});

test("Divide 5 by 2", () => {
    expect(calculator.divide(5,2)).toBe(2.5)
})

test("Multiply 15*33", () => {
    expect(calculator.multiply(15,33)).toBe(15*33) //Who knows what this equals
})