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

// Merge Sort
var sortList = function(head) {

    // Split List
    const mergeSort = (node)=>{
        // console.log(node)

        // head is null or single Node
        if(!node || !node.next) return node

        // init slow and fast pointer
        let left = node;
        let slow = node;
        let fast = node.next;

        // find middle pointer, save as slow
        while(fast && fast.next){
            slow = slow.next;
            fast = fast.next.next;
        }

        // get right list, then cut list into 2 parts.
        let right = slow.next
        slow.next = null;


        //Init left and right sorted Node
        let left_sorted, right_sorted;
        left_sorted = mergeSort(left);
        right_sorted = mergeSort(right);

        // return merged List
        return merge(left_sorted, right_sorted)
    }

    // Merge
    const merge = (l1, l2) =>{
        // init dummy head node
        let dummy = new ListNode(-1);
        let prev = dummy;

        while(l1 && l2){
            if(l1.val <= l2.val){;
                prev.next =  l1;
                l1 = l1.next;
            }
            else{
                prev.next = l2;
                l2 = l2.next;
            }
            prev = prev.next;
        }
        if(l1 !== null) prev.next = l1;
        if(l2 !== null) prev.next = l2;

        // return dummy head
        return dummy.next
    }

    return mergeSort(head)
};

function ListNode(val, next) {
    this.val = (val===undefined ? 0 : val)
    this.next = (next===undefined ? null : next)
}

let node3 = new ListNode(3)
let node1 = new ListNode(1, node3)
let node2 = new ListNode(2, node1)
let node4 = new ListNode(4, node2)


console.log(sortList(node4))
// console.log(!node3 || !node3.next)
