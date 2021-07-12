var func = function() {
    console.log(this)
}.bind(1);

func();
