/**
 * 
 * @description
 * 实现模板字符串
 * 
 * 思路：
 * 获取tag、获取需要解析的data
 * 
 * 需要的优化点：
 * 1、支持深层的嵌套
 * 2、支持不需要解析的props
 */
function tpl( template, data ) {
    const blank = template.indexOf(' ');
    const tag = template.slice( 1, blank ); // 标签名
    const content = template.slice( blank + 1, template.length - tag.length - 3 ) // 剩余内容
    const [ props, text ] = content.split('>'); // 需要解析的属性、文字

    // 把 {{ xxx }} 还原成 xxx
    const back = str => str.slice( 2, str.length - 2 ).trim( );

    // 检查是否有 {{ xxx }}
    const check = str => str.includes('{{') && str.includes('}}');

    let _props = '';
    const allProps = props.split(' '); // 解析props
    allProps.map( p => {
        if ( !check( p )) {
            _props += p
        } else {
            const [ key, val ] = p.split('=');
            _props += `${key}="${data[ back( val )]}" `
        }
    });

    // 解析内部文字
    let _text = '';
    if ( !!text ) {
        if ( !check( text )) {
            _text = text
        } else {
            _text = data[ back( text )]
        }
    }

    return `<${tag} ${_props}>${_text}</${tag}>`
}
// 输入
console.log( tpl(
    '<div class={{className}} other=1>{{name}}</div>', 
    {
        className: 'hd',
        name: 'bigo'
    }
));
