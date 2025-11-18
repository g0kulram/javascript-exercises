const palindromes = function (str) {
    const alphanumerical = "abcdefghijklmnopqrstuvwxyz0123456789";
    const stringArray = str
        .toLowerCase()
        .split('')
        .filter((char) => alphanumerical.includes(char))
        .join('');
    const reversedStr = stringArray.split('').reverse().join('');
    return stringArray == reversedStr;
};

// Do not edit below this line
module.exports = palindromes;
