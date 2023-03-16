function caesarCipher(string, shift = 0) {
    if (shift > 26) { shift = shift-26 }

    const returnStringArray = []
    // First translate letters to CharCodes
    for (let i = 0; i < string.length; i++) {
        const el = string[i];

        if (
            (string.charCodeAt(i) >=65 && string.charCodeAt(i) <=90) ||
            (string.charCodeAt(i) >=97 && string.charCodeAt(i) <= 122)
        ) {
            const originalCode = el.charCodeAt(0);
            const incrementedCharCode = originalCode + shift;
            const cleanedCharCode = preventZOverflow(incrementedCharCode, originalCode);
            const newLetter = translateCharCode(cleanedCharCode);
            returnStringArray[i]=newLetter;
        } else {
            returnStringArray[i]=el
        }
    }

    return returnStringArray.join("");
};

function preventZOverflow(code, originalCode) {
    if (originalCode >= 65 && originalCode <= 90) {
        return cleanUppercase(code);
    } else if (originalCode >= 97 && originalCode <= 122) {
        return cleanLowercase(code);
    } else {
        return code;
    }
}

function cleanLowercase(code) {
    if (code > 122) {
        return code-26;
    } else {
        return code;
    }
};

function cleanUppercase(code) {
    if (code > 90) {
        return code-26;
    } else {
        return code
    }
}

function translateCharCode(code) {
    return String.fromCharCode(code);
}

module.exports = caesarCipher;