const caesar = function (str, shift) {
    let splitString = str.split('');
    let newArr = [];
    let shiftCalc = shift > 26 || shift < -26 ? shift % 26 : shift;
    let alpha = /[a-zA-Z]/;


    splitString.forEach(element => {
        let newChar;
        let wasUpperCase;
        
        if (element.toLowerCase() !== element) {
            wasUpperCase = true;
        }

        if (!element.match(alpha)) {
            return newArr.push(element);
        } else if ((element.toLowerCase().charCodeAt(0) + shiftCalc) <= 122 && (element.toLowerCase().charCodeAt(0) + shiftCalc) >= 97) {
            newChar = element.toLowerCase().charCodeAt(0) + shiftCalc;


        } else if ((element.toLowerCase().charCodeAt(0) + shiftCalc) > 122) {
            newChar = (element.toLowerCase().charCodeAt(0) + shiftCalc) - 26;

        } else {
            newChar = (element.toLowerCase().charCodeAt(0) + shiftCalc) + 26;

        }

        wasUpperCase ? newArr.push(String.fromCharCode(newChar).toUpperCase()) : newArr.push(String.fromCharCode(newChar));

    });

    return newArr.join('');
}
caesar('Hello, World!', 75)

module.exports = caesar;
