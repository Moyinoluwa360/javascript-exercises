const removeFromArray = function(Arr , ...arg) {
    for (let argNum of arg){
        if (Arr.includes(argNum)){
            let index = Arr.indexOf(argNum);
            Arr.splice(index , 1)
        }
    }
    return Arr ; 
};
console.log(removeFromArray([1, 2, 3, 4], 1, 2, 3, 4))
// Do not edit below this line
module.exports = removeFromArray;
