/**
 * 
 * @description
 * 
 * 题目：
 * 数组右移
 */


/**
 * 
 * @description
 * 
 * 思路：
 * 利用双向队列的特性，不断右移
 */
const rotate = ( nums, size, k ) => {
    while( k-- ) {
        nums.unshift( nums.pop( ))
    }
    return nums;
}

console.log(
    rotate([ 1, 2, 3, 4, 5, 6, 7] , 7, 3 )
)

console.log(
    rotate([ -1, -100, 3, 99 ] , 4, 2 )
)