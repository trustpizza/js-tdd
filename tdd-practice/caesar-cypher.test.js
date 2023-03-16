const caesarCipher = require("./caesar-cypher")

test("Shift by 1", () => {
    expect(caesarCipher("abcd", 1)).toBe("bcde")
});

test("handle Z overflow", () => {
    expect(caesarCipher("xyz", 1)).toBe("yza");
})

test("Handle Capitalized Letters", () => {
    expect(caesarCipher("aBcD",1)).toBe("bCdE")
});

test("Handle a shift of 26", () => {
    expect(caesarCipher("abc", 26)).toBe("abc")
})

test("Handle a shift of over 26", () => {
    expect(caesarCipher("abc", 27)).toBe("bcd")
});

test("Default shift is 0", () => {
    expect(caesarCipher("abc")).toBe("abc")
});

test("Handle Z overflow of capital letters", () => {
    expect(caesarCipher("XYZ",1)).toBe("YZA");
});

test("! stays !", () => {
    expect(caesarCipher("!",11)).toBe("!")
})

test("Handle punctuation", () => {
    expect(caesarCipher("abcABC!@#$%^&*(){}[]",27)).toBe("bcdBCD!@#$%^&*(){}[]")
})