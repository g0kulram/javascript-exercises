const repeatString = function(str, count) {
    if(count < 0) {
        return 'ERROR';
    }
    let result = "";
    for(let index=0; index < count; index++) {
        result += str;
    }
    return result;
};

// Do not edit below this line
module.exports = repeatString;
