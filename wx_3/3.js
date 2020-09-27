
/**
 * 
 * @description
 * 
 * 题目：
 * 不含有重复字符的最长子串的长度
 * 不是子序列
 */


/**
 * 
 * @description
 * 
 * 思路：
 * 动态规划，以字符串头开始向后遍历，寻找最长子串
 */
const lengthOfLongestSubstring = s => {
    if ( !s ) return 0;
    let dp = 1; // 初始化
    for ( let i = 0; i < s.length - 1; i++ ) {
        let ptr = i;
        let map = {[ s[ i ]]: 1 }; // map结构，用于判断是否有重复字符
        for ( let j = i + 1; j < s.length; j++ ) {
            if ( map[ s[ j ]] === undefined ) { // 判断是否重复
                map[ s[ j ]] = 1;
            } else {
                dp = Math.max( dp, j - ptr );
                break; // 找到最长的不重复子串
            }
        }
    }
    return dp;
}

console.log(
    lengthOfLongestSubstring('abcabcbb')
)

console.log(
    lengthOfLongestSubstring('bbbbb')
)

console.log(
    lengthOfLongestSubstring('pwwkew')
)