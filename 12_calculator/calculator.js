const add = function(a, b) {
	return a+b;
};

const subtract = function(a, b) {
	return a-b;
};

const sum = function(numArray) {
	return numArray.reduce((total, current) => total+current, 0);
};

const multiply = function(numArray) {
  return numArray.reduce((total, current) => total*current, 1);
};

const power = function(base, power) {
	return base ** power;
};

const factorial = function(num) {
  let result = 1;
  for (let index = 2; index <= num; index++) {
    result *= index;
  }
	return result;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
