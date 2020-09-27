class Scheduler {
    
    constructor( max = 2 ) {
        this.max = max;
        this.jobs = [ ];
        this.pendding = [ ];
    }
    
    checkJob( ) {
        const promiseCreator = this.pendding.shift( );
        if ( !promiseCreator ) return;
        this.jobs.push( this.decorateJob( promiseCreator ));
    }
    
    decorateJob( promiseCreator ) {
        const p = promiseCreator( );
        p.then(( ) => {
            this.clearJob( this.jobs.length + 1 )
            this.checkJob( );
        })
        return p;
    }
    
    add( promiseCreator ) {
        if ( this.jobs.length >= this.max ) {
            // 这里需要优化
            this.pendding.push( promiseCreator );
            const p = new Promise( resolve => {
                promiseCreator( )
                    .then( resolve );
            })
            return p;
        } else {
            const p = this.decorateJob( promiseCreator );
            this.jobs.push( p );
            console.log('??', p )
            return p;
            
        }
    }
    
    clearJob( Index ) {
        this.jobs.splice( Index, 1 );
    }
}
const scheduler = new Scheduler( );
const timeout = time => new Promise( resolve => {
    setTimeout( resolve, time )
});
const addTask = (time, order) => {
    scheduler.add(() => timeout( time ))
        .then(() => console.log(order))
}


addTask(1000, '1')
addTask(500, '2')
addTask(300, '3')
addTask(400, '4')