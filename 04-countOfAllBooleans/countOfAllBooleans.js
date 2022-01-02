function countOfAllBooleans(arr) {
  // Insert code here;
  
  let result=0;
  for(let i=0; i< arr.length; i++){

    if(arr[i]=== true || arr[i]=== false){
      result++;
    }

  }

  return result;
}

// Do not edit this line;
module.exports = countOfAllBooleans;
