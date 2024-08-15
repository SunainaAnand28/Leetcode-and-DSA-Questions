// Leetcode Problem - Two Sum
// https://leetcode.com/problems/two-sum/

var twoSum = function (nums, target) {
    const numIndex = {};
    for (let i = 0; i < nums.length; i++) {
        diff = target - nums[i];

        if(numIndex.hasOwnProperty(diff)){
            return [numIndex[diff], i];

        }
        numIndex[nums[i]] = i;
    }


};
let nums = [2,7,11,15]
let  target = 9
let result = twoSum(nums,target);
console.log(result);