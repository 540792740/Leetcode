/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var reverseList = function(head) {
    if(head === null) return head

    // Dummy Node
    let root = new ListNode(0, head);
    while(head.next !== null){
        let node = head.next;
        let node1 = head.next.next;
        let root1 = root.next;

        root.next = node;
        node.next = root1;
        head.next = node1;
    }
    return root.next
};
