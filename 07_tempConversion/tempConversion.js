const convertToCelsius = function(farht) {
  const celcius = (farht - 32 )*5/9 ;
  let result = celcius.toFixed(1);
  let floatResult = parseFloat(result);
  return floatResult;
};

const convertToFahrenheit = function(celcius) {
  const farht = (celcius * 9/5) + 32 ;
  let result = farht.toFixed(1);
  let floatResult = parseFloat(result);
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
