/**
 * 
 * @description
 * 
 * 题目：
 * 版本判断
 * 
 * 思路1：
 * 字符串值的判断
 * 
 */
const judge = ( s1, s2 ) => {
    return s1 === s2;
}

console.log( judge('2.11.1', '2.2.1'))

/**
 * @description
 * 
 * 题目：
 * 版本判断
 * 
 * 思路2:
 * 每个版本位进行判断
 * 
 */
const judge2 = ( s1, s2 ) => {
    const a1 = s1.split('.');
    const a2 = s2.split('.');
    return a1.every(( x, k ) => x === a2[ k ]);
}

console.log( judge2('2.11.1', '2.2.1'))


/**
 * 
 * @description
 * 
 * 题目：
 * 回文
 * 
 * 思路：
 * 变成字符串，双指针前后逼近
 */
const solution = num => {
    const str = String( num );
    let s = 0;
    let e = str.length - 1;
    while ( s < e ) {
        if ( str[ s ] !== str[ e ]) return false;
        s++;
        e--;
    }
    return true;
}


/**
 * 
 * @description
 * 
 * 思路：
 * 同位判断
 */
const judge3 = ( s1, s2 ) => {
    const a1 = s1.split('.');
    const a2 = s2.split('.');
    const judge = ( n1, n2 ) => {
        if ( n1 > n2 ) return true;
        if ( n1 <= n2 ) return false;
    }
    return a1.some(( n1, k ) => judge( Number( n1 ), Number( a2[ k ])))
}

console.log( judge3('2.11.1', '2.2.1'))