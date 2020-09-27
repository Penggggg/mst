const solution = start => {
    const res = [ ];
    const bfs = ( node, path ) => { // 广度遍历、递归
        if ( !node.children ) { // 到了终点
            res.push([ ...path ]);
        }
        node.children.map( c => {
            bfs( c, [ ...path, node.val ]);
        });
    }
    bfs( start, [ ]);
    return res;
}

const solution = start => {
    let res = [ start.val ];
    console.log( start.val ); // 输出第1环
    const bfs = ( nodes ) => { // 广度遍历、递归
        const next = [ ];
        const cur = [ ];
        for( let i = 0; i < res.length; i++ ) {
            for ( let j = 0; j < nodes.length; j++ ) {
                console.log( nodes[ j ].val ); // 从2环开始输出
                next.push( nodes[ j ].children ); // 下一层
                cur.push(`${res[ i ]}->${nodes[ j ].val}`);
            }
        }
        res = cur;
        bfs( next );
    }
    bfs( start.children || [ ]);
    return res;
}