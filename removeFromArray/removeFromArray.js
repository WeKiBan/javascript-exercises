const removeFromArray = function() {
    let array = arguments[0];
    for(var i = 1; i< arguments.length; i++){
        if(array.includes(arguments[i])){
            array.splice(array.indexOf(arguments[i]), 1);
        }
    }
    return array;
}
removeFromArray([1, 2, 3, 4], 3);
module.exports = removeFromArray
