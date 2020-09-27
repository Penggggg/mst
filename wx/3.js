/**
 * 
 * @description
 * 
 * 题目：
 * 判断 s2 是否包含 s1 的排列。
 */



/**
 * 
 * @description
 * 
 * 思路：
 * 以s1为滑动窗口的大小，从s2开头开始遍历
 * 在遍历过程，看下窗口内 s2 是否可以变换乘s1 （逆向思维）
 */
const solution = ( s1, s2 ) => {
    if ( !s1 ) return false;
    const size = s1.length;
    const sortedS1 = sortStr( s1 );
    for ( let i = 0; i < s2.length - size; i++ ) {
        const res = sortedS1 === sortStr( s2.slice( i, i + size ))
        if ( res ) return true;
    }
    return false;
}

// 排序一个字符串
function sortStr( s ) {
    return s.split('') 
        .sort(( x, y ) => x.charCodeAt( ) - y.charCodeAt( ))
        .join('');
}

console.log( solution('ab', 'eidbaooo'))
console.log( solution('ab', 'eidboaoo'))