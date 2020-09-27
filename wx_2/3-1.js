/**
 * 
 * @description
 * 
 * 题目：
 * 写出比较两颗二叉树是否相等(包括结构及节点值)的算法
 */



/**
 * 
 * @description
 * 
 * 思路：
 * 序列化二叉树，然后进行比较
 * 
 * 如：
 *        9
       /    \
      1      2
 *   /  \   / \
    空   5  空  空

    前序遍历：=> 9,1,#,5,2,#,#
 */
const solution = ( node1, node1 ) => {
    return treeToArr( node1 ).join('') ===  treeToArr( node2 ).join('')
}

function treeToArr( node ) {
    if ( !node ) return ['#'];
    const res = [ ];
    const dfs = node => {
        const { val, left, right } = node;
        res.push( val );
        if ( !!left ) {
            dfs( left );
        } else {
            res.push('#');
        }
        if ( !!right ) {
            dfs( right );
        } else {
            res.push('#');
        }
    }
    dfs( node );
    return res;
}