// Leetcode Problem - Plus one
// https://leetcode.com/problems/plus-one/description/
/*
You are given a large integer represented as an integer array digits, where each digits[i] is the ith digit of the integer. The digits are ordered from most significant to least significant in left-to-right order. The large integer does not contain any leading 0's.
Increment the large integer by one and return the resulting array of digits. */

var plusOne = function (digits) {
    for ( let i = digits.length - 1; i >= 0; i--) {
        if (digits[i] < 9) {
            digits[i]++;
            return digits;
        }
        digits[i] = 0;

    }
    digits.unshift(1);
    return digits;
};

// example 1
digits = [1,2,3];
console.log(plusOne(digits)); // Output: [1, 2, 4]