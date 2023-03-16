const capitalize = require("./capitalize");

test("word becomes Word", () => {
    expect(capitalize("word")).toBe("Word")
});

test("STRING remains STRING", () => {
    expect(capitalize("STRING")).toBe("STRING")
});

test("Only capitalizes first word", () => {
    expect(capitalize("two words")).toBe("Two words")
});