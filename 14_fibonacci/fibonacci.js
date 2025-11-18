const fibonacci = function(position) {
    if(position < 0) {
        return 'OOPS';
    }
    if(position == 0) {
        return 0;
    }
    if(position == 1 || position == 2) {
        return 1;
    }
    let nMinus1 = 1;
    let n = 1;
    for(let i = 3; i <= position; i++) {
        const temp = n;
        n += nMinus1;
        nMinus1 = temp;
    }
    return n;
};

// Do not edit below this line
module.exports = fibonacci;
