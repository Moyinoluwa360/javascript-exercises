const findTheOldest = function(arr) {
    let yearsArr = []
    arr.map((people) => {
        if (people.yearOfDeath == undefined){
            let year = 2024 - people.yearOfBirth
            let person_year = {
                name : people.name,
                yearsOld : year, 
            }
            yearsArr.push(person_year)
        }else{
            let year = people.yearOfDeath - people.yearOfBirth
            let person_year = {
            name : people.name,
            yearsOld : year, 
        }
        yearsArr.push(person_year)
        }
    })
    yearsArr.sort(((value1,value2) => (value1.yearsOld > value2.yearsOld) ? -1 : 1 ))
    return yearsArr[0]
};
console.log(findTheOldest(people))
// Do not edit below this line
module.exports = findTheOldest;