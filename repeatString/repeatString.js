const repeatString = function(str, repeatTimes) {
    let string = "";
    if(repeatTimes < 0){
        return "ERROR";
    } else {
        for(var i = 0; i < repeatTimes; i++){
            string += str;
        }
    }
    return string;
}

module.exports = repeatString
