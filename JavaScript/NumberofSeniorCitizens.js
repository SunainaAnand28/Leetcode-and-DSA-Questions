// Leetcode Problem - Number of senior Citizens
// https://leetcode.com/problems/number-of-senior-citizens/description/

var countSeniors = function (details) {
    let count = 0;
    for (let detail of details) {
        age = parseInt(detail.slice(11, 13));
        if (age > 60) {
            count = count + 1;

        }
    }
    return count;
};

details = ["7868190130M7522","5303914400F9211","9273338290F4010"]
let r = countSeniors(details)
console.log(r)