const fibonacci = function(number) {
let fibArr = [0, 1];

if(number < 0) return "OOPS";


for(var i = 1; i < number; i++){
 let nextNum = fibArr[i] + fibArr[i-1];
    fibArr.push(nextNum);
 }

 return fibArr[number];
}

fibonacci(0);


module.exports = fibonacci
