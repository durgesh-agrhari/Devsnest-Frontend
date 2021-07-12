var func = function() {
    console.log(this)
}.bind(1);
 
 var obj = {
    callFun : func
 }
obj.callFun.func();
