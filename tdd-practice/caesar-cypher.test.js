const caesarCipher = require("./caesar-cypher")

test("Shift by 1", () => {
    expect(caesarCipher("abcd", 1)).toBe("bcde")
});

test.skip("handle Z overflow", () => {
    expect(caesarCipher("xyz", 1)).toBe("yza");
})

test.skip("Handle Capitalized Letters", () => {
    expect(caesarCipher("aBcD",1)).toBe("bCdE")
});

test.skip("Handle a shift of 26", () => {
    expect(caesarCipher("abc", 26)).toBe("abc")
})

test.skip("Handle a shift of over 26", () => {
    expect(caesarCipher("abc", 27)).toBe("bcd")
});