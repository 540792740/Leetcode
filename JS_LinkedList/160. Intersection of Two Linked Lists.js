function ListNode(val) {
    this.val = val;
    this.next = null;
}

/**
 * Author Peter
 * Email: peterwangjiawei@gmail.com
 * Date Aug 24 2020
 * Ask:
 *      1. IS there cycle in the LinkedList  -> No
 *      2.
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */



var getIntersectionNode = function(headA, headB) {
    if(!headA || !headB) return null;
    let Node_A = headA;
    let Node_B = headB;
    while(Node_A !== Node_B){
        // Cycle A
        if(Node_A.next !== null) Node_A = Node_A.next;
        else {
            if(Node_B.next === null) {
                return null
            }
            Node_A = headB;
        }
        // Cycle B
        if(Node_B.next !== null)Node_B = Node_B.next;
        else Node_B = headA
    }
    return Node_A

};
