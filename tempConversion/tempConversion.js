const ftoc = function(num) {
  let result = ((num - 32) * 5/9);
  if(Number.isInteger(result)) return result;
  return parseFloat(result.toFixed(1));
  
  
}

const ctof = function(num) {
  let result = (num * 9/5 + 32);
  if(Number.isInteger(result)) return result;
  return parseFloat(result.toFixed(1));
  
}



module.exports = {
  ftoc,
  ctof
}

