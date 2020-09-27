
new Promise(( r, j ) => {
    console.log('p-1');
    r( );
}).then(( ) => {
    console.log('t1-1');
    new Promise(( r, j ) => {
        console.log('p2');
        r( )
    }).then(( ) => {
        console.log('t2-1')
    }).then(( ) => {
        console.log('t2-2')
    })
}).then(( ) => {
    console.log('t1-2')
})