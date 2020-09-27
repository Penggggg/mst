/**
 * 
 * @description
 * 
 * 题目：
 * 二叉树盗窃计划
 */



/**
 * 
 * @description
 * 
 * 思路：
 * 动态规划
 * 
 * 每个节点都有偷/不偷的选择
 * 偷了当前这个，就不能偷上一个连续的节点
 * 
 * 递推公式：
 * 对于任意节点的最大获利情况:
 * 
 * dp( n ) = Math.max(
 *     dp( n ) + dp( n.grandChild ),
 *     dp( n.children )
 * )
 */
const solution = root => {

}


/**
 * 
 * @description
 * 
 * 思路2:
 * 不是全偷奇数层，就是全偷偶数层
 * 
 * 最大获利情况：
 * dp = Math.max( 奇层, 偶层 )
 */
const solution2 = root => {
    const odd = [ ]; // 奇
    const even = [ ]; // 偶

    let sign = true;
    let level = [ root ];
    while ( level.length ) { // 广度遍历二叉树
        const _level = [ ]; // 下一层
        for ( let i = 0; i < level.length; i++ ) {
            const { val, left, right } = level[ i ];
            if ( sign ) { // 按奇偶
                odd.push( val )
            } else {
                even.push( val )
            }
            !!left && _level.push( left );
            !!right && _level.push( right );
        }
        sign = !sign;
        level = _level;
    }
    return Math.max(
        odd.reduce(( p, c ) => p + c , 0 ),
        even.reduce(( p, c ) => p + c , 0 )
    )
}

console.log( solution2({
    val: 3,
    left: { 
        val: 2,
        right: { val: 3 }
    },
    right: {
        val: 3,
        right: { val: 1 }
    }
}))