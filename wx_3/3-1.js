/**
 * 
 * 
 */
const lengthOfLongestSubstring = s => {
    if ( !s ) return 0;
    let dp = 1; // 初始化
    for ( let i = 0; i < s.length; i++ ) {
        for ( let j = 0; j < i; j++ ) {

        }
    }
    return dp;
}

console.log(
    lengthOfLongestSubstring('abcabcbb')
)