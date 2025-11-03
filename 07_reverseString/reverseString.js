const reverseString = function(str) {
    let result = "";
    for(let index =-1; index >= -str.length; index--) {
        result += str.at(index);
    }
    return result;
    //return str.split("").reverse().join('');
};

// Do not edit below this line
module.exports = reverseString;
