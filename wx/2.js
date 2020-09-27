/**
 * 
 * @description
 * 
 * 题目：
 * 求出这个数组中的逆序对的总数
 */



/**
 * 
 * @description
 * 
 * 思路：
 * 从第一位开始遍历，对右侧元素进行比较
 * 时间：O( n^2 )
 */
const solution = nums => {
    let res = 0;
    while( nums.length ) {
        const cur = nums.shift( );
        for ( let i = 0; i < nums.length; i++ ) {
            if ( cur > nums[ i ]) res++;
        }
    }
    return res;
}

console.log( solution([ 7, 5, 6, 4 ]))