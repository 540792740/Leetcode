/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {boolean}
 */
var isPalindrome = function(head) {
    let res = '';
    let res_palindrome = ''
    while(head){
        res += head.val;
        res_palindrome = head.val + res_palindrome
        head = head.next
    }
    return res === res_palindrome;
};
