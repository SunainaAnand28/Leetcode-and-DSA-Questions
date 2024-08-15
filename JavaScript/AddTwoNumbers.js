// Leetcode Problem - Add Two Numbers
// https://leetcode.com/problems/add-two-numbers/description/
/** 
You are given two non-empty linked lists representing two non-negative integers. The digits are stored in reverse order, and each of their nodes contains a single digit. Add the two numbers and return the sum as a linked list.
You may assume the two numbers do not contain any leading zero, except the number 0 itself.
 */


function ListNode(val, next = null) {
    this.val = val;
    this.next = next;
}


function arrayToList(arr) {
    let dummyHead = new ListNode(0);
    let current = dummyHead;
    for (let num of arr) {
        current.next = new ListNode(num);
        current = current.next;
    }
    return dummyHead.next;
}


function addTwoNumbers(l1, l2) {
    let dummyHead = new ListNode(0);
    let current = dummyHead;
    let carry = 0;

    while (l1 !== null || l2 !== null) {
        let x = (l1 !== null) ? l1.val : 0;
        let y = (l2 !== null) ? l2.val : 0;
        let sum = carry + x + y;

        carry = Math.floor(sum / 10);

        current.next = new ListNode(sum % 10);
        current = current.next;

        if (l1 !== null) l1 = l1.next;
        if (l2 !== null) l2 = l2.next;
    }

    if (carry > 0) {
        current.next = new ListNode(carry);
    }

    return dummyHead.next;
}


function listToArray(list) {
    let result = [];
    while (list !== null) {
        result.push(list.val);
        list = list.next;
    }
    return result;
}


let l1 = arrayToList([2, 4, 3]);
let l2 = arrayToList([5, 6, 4]);
let output = addTwoNumbers(l1, l2);

console.log(listToArray(output));

