/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var detectCycle = function(head) {
    if(!head) return null;
    if(!head.next) return null;

    // fast pointer, move 2 node;
    // slow pointer, move 1 node;
    // if fast and slow pointer point same node, true;
    let slow = head.next;
    let fast = head.next.next;

    while(fast !== slow){
        if(!fast) return null
        if(!fast.next) return null;

        slow = slow.next;
        fast = fast.next.next;
    }

    slow = head;

    while(fast !== slow) {
        fast = fast.next;
        slow = slow.next;
    }

    return slow
};








