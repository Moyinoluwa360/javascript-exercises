const palindromes = function (word) {
    word = word.toLowerCase()
    let newArr = []
    let wordArr = []
    let booleanArr = []
    let alphabets = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z',"1","2","3","4","5","6","7","8","9","0"]
    for (let i of word){
        if (alphabets.includes(i)){
            wordArr.push(i)
            newArr.push(i)
        }
    }
    wordArr.reverse()
    for (let index = 0; index<wordArr.length; index++){
        if (wordArr[index] == newArr[index]){
            booleanArr.push("true")
        }else{
            booleanArr.push("false")
        }
    }
    if (booleanArr.includes("false")){
        return false
    }else{
        return true
    }
};
// Do not edit below this line
module.exports = palindromes;
