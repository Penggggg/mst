/**
 * 
 * @description
 * 
 * 题目：
 * html节点树能否用1）算法比较，是否存在优化方案
 */


/**
 * 
 * @description
 * 
 * 思路：
 * html节点树可用1）算法比较
 * 但需要丰富细节：如atrribute、text的比较
 * 
 * 3-1.js存在的问题：
 * 先序列化，时间可能过长
 * 
 * 优化方案：
 * 两棵树t同层遍历，遍历过程中一旦发现不对等的情况，就可以返回结果（速度上会比3-1.js更快
 */