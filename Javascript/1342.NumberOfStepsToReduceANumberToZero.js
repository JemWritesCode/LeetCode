//1342. Number of Steps to Reduce a Number to Zero
var numberOfSteps  = function(num) {
    var steps = 0
    while (num > 0){
        num % 2 === 0 ? num /= 2 : num--
        steps++
    }
    return steps
}