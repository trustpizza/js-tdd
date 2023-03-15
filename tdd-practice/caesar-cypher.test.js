const caesarCipher = require("./caesar-cypher")

test("Shift by 1", () => {
    expect(caesarCipher("abcd")).toBe("bcde")
});