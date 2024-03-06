const getTheTitles = function(arr) {
    let titleArr = []
    let title;
    arr.map((obj) => {
        title = obj.title
        titleArr.push(title)
    })
    return titleArr
};
// Do not edit below this line
module.exports = getTheTitles;
