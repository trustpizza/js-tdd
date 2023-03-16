function reverseString(string) {
    const returnStringArray = []
    for (let i = 0; i < string.length; i++) {
        const element = string[i];
        returnStringArray.unshift(element)
    }

    return returnStringArray.join("");
}

module.exports = reverseString;