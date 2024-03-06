const add = function(a,b) {
  const add = a + b
  return add
};

const subtract = function(a,b) {
	const subtract = a - b
  return subtract
};

const sum = function(arr) {
	if (arr == []){
    return 0
  }else{
    let sum = arr.reduce((total,value) => {return total+value}, 0)
    return sum
  }
};

const multiply = function(arr) {
  if (arr == []){
    return 0
  }else if(arr.lenght == 1){
    return "error"
  }else{
    let multiply = arr.reduce((total,value) => {return total * value})
    return multiply
  }
};

const power = function(a,b) {
	let power = a ** b
  return power
};

const factorial = function(number) {
  if (number == 0){
    return 1
  }else{
    let factorial = number
	for (let i= number-1; i >0 ;i--){
    factorial = factorial * i
  }
  return factorial
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
