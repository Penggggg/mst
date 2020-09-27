/**
 * 
 * @description
 * 
 * 题目：
 * K 个一组翻转链表
 */


/**
 * 
 * @description
 * 
 * 思路：
 * 每K个一组进行独立的反转，但需要连接相邻的两组
 */
const reverseKGroup = ( head, k ) => {
    let pre = null;
    let cur = head;
    let p = head;
    for( let i = 0; i < k; i++ ) { // 检查是否有k个
        if( !p ) return head;
        p = p.next;
    }
    for( let i = 0; i < k; i++ ) { // 反转
        let next = cur.next;
        cur.next = pre;
        pre = cur;
        cur = next;
    }
    head.next = reverseKGroup( cur, k ); // 连接
    return pre; // 返回当前这条链的最后一位
}

console.log(
    reverseKGroup(
        { 
            val: 1,
            next: {
                val: 2,
                next: {
                    val: 3,
                    next: { 
                        val: 4,
                        next: {
                            val: 5
                        }
                    }
                }
            }
        },
        2
    )
)