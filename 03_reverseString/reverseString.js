const reverseString = function(string) {
    let stringARR = string.split("").reverse();
    let reversedString = "";
    for (let letter of stringARR){
        reversedString += letter ; 
    } 
    return reversedString;
};

// Do not edit below this line
module.exports = reverseString;
