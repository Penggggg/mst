/**
 * 
 * @description
 * 
 * 题目：
 * 逆序链表相加
 */



/**
 * 
 * @description
 * 
 * 思路：
 * 实现链表的十进制
 */
const addTwoNumbers = ( l1, l2 ) => {
    let pre = 0; // 代表下一位相加中是否需要进位
    const res = new NodeList( );
    let ptr = res;
    while ( l1 || l2 ) {
        const cur = ( !!l1 ? l1.val : 0 ) + ( !!l2 ? l2.val : 0 ) + pre; // 相加
        pre = cur >= 10 ? 1 : 0;
        ptr.next = new NodeList( cur % 10 ); // 十进制
        ptr = ptr.next;
        l1 = l1.next || null;
        l2 = l2.next || null;
    }
    return res.next
}

function NodeList ( val, next ) {
    this.val = val;
    this.next = next;
}

console.log( 
    addTwoNumbers(
        {
            val: 3,
            next: {
                val: 2,
                next: {
                    val: 1
                }
            }
        }, {
            val: 6,
            next: {
                val: 5,
                next: {
                    val: 4
                }
            }
        }
    )
)