/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function(head, n) {
    // when only one Node:
    if(head.next === null) return head.next;

    // initial fast slow pointer
    let fast = head;
    let slow = head;

    // Move fast n times, then move both together.
    while(n > 0){
        fast = fast.next;
        n--;
    }

    //Move together
    while(fast && fast.next){
        fast = fast.next;
        slow = slow.next;
    }

    // if fast is null return head.next
    if(!fast) head = head.next;
    else{
        slow.next = slow.next ? slow.next.next : null;
    }
    // change slow pointer, move slow.next
    return head
};
