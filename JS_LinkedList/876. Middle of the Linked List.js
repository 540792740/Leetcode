function ListNode(val, next) {
    this.val = (val===undefined ? 0 : val)
    this.next = (next===undefined ? null : next)
}

var middleNode = function(head) {
    let fast = head;
    let slow = head;
    while(fast.next !== null){
        if(fast.next.next !== null){
            fast = fast.next.next;
            slow = slow.next;
        }
        else{
            slow = slow.next;
            break;
        }
    }
    return slow


};
