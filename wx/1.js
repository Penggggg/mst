/**
 * 
 * @description
 * 
 * 题目1：
 * 验证是否为二叉树的前序序列化
 */



/**
 * 
 * @description
 * 
 * 思路：
 * 对于任意非根节点，它至少会存在父亲节点（非空）
 * 若不存在父节点，则返回错误
 * 
 */
const solution = str => {
    const tree = str.split(',');
    const parentIndex = index => Math.floor(( index - 1 ) / 2 ); // 前序遍历的父节点下标
    for( let i = tree.length - 1; i > 1; i-- ) { // 从叶子节点开始向上遍历，有利于加速
        if ( tree[ parentIndex( i )] === '#' ) return false;
    }
    return true
}

/**
 * 
 * @description
 * 思路2:
 * 空节点数量比非空会多1
 */
const solution2 = str => {
    const tree = str.split(',');
    const emptyList =tree.filter( x => x === '#' ).length
    return ( emptyList - ( tree.length - emptyList )) === 1
}

console.log( solution2('9,3,4,#,#,1,#,#,2,#,6,#,#'))