function productOfAnyAmountOfNumbers(...args) {
  // Insert code here;
  
  let arr=args;
  let result=1;
  for(let i=0; i<arr.length; i++){
    result *= arr[i]; 
  }
  return result;
  
}

// Do not edit this line;
module.exports = productOfAnyAmountOfNumbers;
