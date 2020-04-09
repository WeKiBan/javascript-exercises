function add (num1, num2) {
	return num1 + num2;
}

function subtract (num1, num2) {
	return num1 - num2
}

function sum (arr) {
	
	return arr.reduce((a, b) => a + b, 0);
}

function multiply (arr) {
	return arr.reduce((a,b) => a * b);
}

function power(num, power) {
	return Math.pow(num, power)
}

function factorial(num) {
	let arr = [];
	if(num === 0) return 1;
	
	for(let i = 0; i < num; num--){
		arr.push(num);
	}

	return arr.reduce((a, b) => a * b);
}


module.exports = {
	add,
	subtract,
	sum,
	multiply,
    power,
	factorial
}