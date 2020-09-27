/**
 * 
 * @description
 * 
 * 题目：
 * 判断该数组是否 含有连续的子数组，其大小至少为 2，且总和为 k 的倍数，即总和为 n*k
 */



/**
 * 
 * @description
 * 
 * 思路：
 * 滑动窗口思路，但窗口大小会不大变大
 */
const solution = ( nums, k ) => {
    if ( !k ) return false;
    for ( let i = 2; i <= nums.length; i++ ) { // 窗口大小
        for ( let j = 0; j < nums.length - i; j++ ) {
            const res = ( nums.slice( j, j + i ).reduce(( p, c ) => p + c, 0 )) % k === 0
            if ( res ) return true;
        }
    }
    return false
}

console.log( solution([ 23,2,4,6,7], 6 ))
console.log( solution([ 23,2,6,4,7], 6 ))