const sumAll = function(num1, num2) {
    let argsArray = [num1, num2] ;
    let sumArray = [];
    argsArray.sort((a, b) => a - b);
    if(typeof argsArray[0] !== "number" || typeof argsArray[1] !== "number") return "ERROR";
    if(argsArray[0] < 0 || argsArray[1] < 0) return "ERROR";
    for(var i = argsArray[0]; i <= argsArray[1]; i++){
            sumArray.push(i);
        }
     return sumArray.reduce((a, b) => a + b);
}




module.exports = sumAll
