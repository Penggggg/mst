function logName(){
    console.log(this.name);
}

var name = "B";

function doFun1(fn){

    fn();
}
var obj = {
    name: "A",  
    logName: logName
};

doFun1(obj.logName);

function doFun2(o){

    o.logName();

}

doFun2(obj);