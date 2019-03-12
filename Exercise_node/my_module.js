var multiplication = function(a,b){
  return `The multiplication of two numbers is ${a*b}`
};

var add = function(a,b){
  return `The addition of two numbers is ${a+b}`
};

var subtract = function(a,b){
  return `The subtraction of two numbers is ${a-b}`
};

var divide = function(a,b){
  return `The divison of two numbers is ${a/b}`
};


module.exports.multiplication = multiplication;
module.exports.add = add;
module.exports.subtract = subtract;
module.exports.divide = divide;
