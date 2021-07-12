function sumOfNumbers() {
    var total = 0;
    for(var i = 0; i < arguments.length; i++){
        total += arguments[i];
    }
    return total;
}
var sum = sumOfNumbers(1,2,3);
console.log(sum);
