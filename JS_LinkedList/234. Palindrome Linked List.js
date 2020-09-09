/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 * Test case: [1,2], [1, 2, 2, 1], [1], [], [-129, -129]
 */


function ListNode(val, next) {
  this.val = (val===undefined ? 0 : val)
      this.next = (next===undefined ? null : next)
}


var isPalindrome = function(head) {
    if(!head || !head.next) return true
    let fast = head;
    let backPointer = new ListNode();
    let slow = head;
    let temp

    while(fast && fast.next){
        fast = fast.next.next;

        // Reverse it
        temp = slow.next;
        slow.next = backPointer;
        backPointer = slow;
        slow = temp;
    }

    // Even
    if(fast !== null){
        slow = slow.next
    }

    while(slow && backPointer){
        if(slow.val !== backPointer.val) return false;
        slow = slow.next;
        backPointer = backPointer.next
    }
    return true;
}


var isPalindrome1 = function(head) {
    let res = '';
    let res_palindrome = ''
    while(head){
        res += head.val;
        res_palindrome = head.val + res_palindrome
        head = head.next
    }
    return res === res_palindrome;
};

