const removeFromArray = function(array) {
    //check for no arguments
    if(arguments.length === 0) {
        return;
    }
    //check for only one argument
    if(arguments.length === 1) {
        return array;
    }
    const args = Array.from(arguments)
    const valuesToRemove = args.slice(1);
    // valuesToRemove.forEach(value => {
    //     const indexToRemove = array.indexOf(value);
    //     if(indexToRemove !== -1) {
    //         array.splice(indexToRemove, 1);
    //     }
    // });
    let result = array.filter((value) => {
        return !valuesToRemove.includes(value);
    });
    return result;
};

// Do not edit below this line
module.exports = removeFromArray;
