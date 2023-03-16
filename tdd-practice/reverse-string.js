function reverseString(string) {
    // Can put into an array and return the charAt() of the array
    const returnStringArray = []
    for (let i = 0; i < string.length; i++) {
        const element = string[i];
        returnStringArray.unshift(element)
    }

    return returnStringArray.join("");
}

module.exports = reverseString;