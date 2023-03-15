const reverseString = require("./reverse-string")

test("racecar stays racecar", () => {
    expect(reverseString("racecar").toBe("racecar"))
})