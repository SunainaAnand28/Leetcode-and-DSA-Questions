// https://leetcode.com/problems/palindrome-number/description/
/* Given an integer x, return true if x is a 
palindrome
, and false otherwise. */
 
var isPalindrome = function (x) {
    // Convert the integer to a string
    let s = x.toString();
    
    // Reverse the string
    let reversedS = s.split('').reverse().join('');
    
    // Compare the original string with the reversed string
    return s === reversedS;
};