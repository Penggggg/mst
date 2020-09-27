/**
 * 
 * @description
 * 
 * 题目1：
 * 给定2个单向链表，每个节点包含一个0-9的数字，要求返回他们对应节点相加后产生的链表，
 * 
 * Input: (2 -> 4 -> 3) + (5 -> 6 -> 4)
 * Output: 7 -> 0 -> 8
 */




/**
 * 
 * @description
 * 思路2:
 * 节点相加的过程，需要参考10进制的进位
 * 
 * @param
 * type head = ListNode
 */
const solution = ( head1, head2 ) => {
    let fix = 0; // 代表是否在下一次加法中额外加1
    let res = new ListNode( );
    let cur = res;
    while( head1 || head2 ) {
        const addRes = ( !!head1 ? head1.val : 0 ) + ( !!head2 ? head2.val : 0 ) + fix;
        cur.next = new ListNode({ val: addRes % 10 }); // 存余数
        cur = cur.next;
        fix = addRes >= 10 ? 1 : 0;

        head1 = head1 ? head1.next : null;
        head2 = head2 ? head2.next : null;
    }
    return res.next;
}

function ListNode({ val, next }) {
    this.val = val;
    this.next = next;
}