/*
Given a linked list, determine if it has a cycle in it.

To represent a cycle in the given linked list, we use an integer pos which represents the position (0-indexed) in the linked list where tail connects to. If pos is -1, then there is no cycle in the linked list.
*/


var hasCycle = function(head) {
    if(head == null || head.next == null) {
        return false
    }
    
    let slow = head;
    let fast = head.next;
    while(slow != fast) {
        if(fast == null || fast.next == null) {
            return false;
        }
        slow = slow.next;
        fast = fast.next.next;
    }
    return true;
};