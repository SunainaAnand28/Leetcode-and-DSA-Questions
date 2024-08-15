// Leetcode Problem - 3 Sum

var threeSum = function (nums) {
    const result = [];
    let compare = (a, b) => {
        return a - b;
    }
    nums.sort(compare);

    for (let i = 0; i < nums.length - 2; i++) {

        if (i > 0 && nums[i] === nums[i - 1]) continue;

       
        let left = i + 1;
        let right = nums.length - 1;

        while (left < right) {
            const sum = nums[i] + nums[left] + nums[right];

            if (sum === 0) {
                result.push([nums[i], nums[left], nums[right]])


                while (left < right && nums[left] === nums[left + 1]) left++;
                while (left < right && nums[right] === nums[right - 1]) right--;

                left++;
                right--;
            } else if (sum < 0) {
                left++;
            } else {
                right--;
            }
        }
    }

    return result;
}
    
let nums = [-1,0,1,2,-1,-4]
let output = threeSum(nums);
console.log(output)