const reverseString = require("./reverse-string")

test("racecar stays racecar", () => {
    expect(reverseString("racecar")).toBe("racecar")
});

test("asdf becomes fdsa", () => {
    expect(reverseString('asdf')).toBe("fdsa")
});
