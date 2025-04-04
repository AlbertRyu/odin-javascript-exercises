const add = function(a, b) {
  return a + b
};

const subtract = function(a, b) {
  return a - b
	
};

const sum = function(array) {
 return array.reduce((total, item) => total + item, 0)
};

const multiply = function(array) {
	return array.reduce((total, item) => total * item, 1) 
};

const power = function(a, b) {
	return a**b
	
};

const factorial = function(size) {
	if (size === 0 || size ===1){
		return 1
	} else {
		return size * factorial(size-1)
	}	
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
