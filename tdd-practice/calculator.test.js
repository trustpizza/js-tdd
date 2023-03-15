const calculator = require("./calculator");

test("Add 8 and 7", () => {
    expect(calculator.add(8,7)).toBe(15)
})