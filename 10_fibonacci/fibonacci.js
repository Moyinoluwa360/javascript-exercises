const fibonacci = function(number) {
    let fibNum;
    let fibTrack = 1; 
    let fibTrack2 = 0;
    if (number == 0){
        return 0
    }else if(number < 0){
        return "OOPS"
    }else{
        for (let i = 0; i < number-1; i++){
            fibNum = fibTrack + fibTrack2
            fibTrack2 = fibTrack
            fibTrack = fibNum
        }
        return fibNum
    }

};
let v = fibonacci("2")
console.log(v)
// Do not edit below this line
module.exports = fibonacci;
