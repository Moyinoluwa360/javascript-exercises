const repeatString = function(word,num){
    let reapetedWord = "" ;
    for (let i = 0; i < num; i++ ){
        reapetedWord += word; 
    }
    return reapetedWord;
};
//console.log(repeatString("hey",3))
// Do not edit below this line
module.exports = repeatString;
