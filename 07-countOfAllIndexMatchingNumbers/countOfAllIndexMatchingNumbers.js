function countOfAllIndexMatchingNumbers(nums) {
  // Insert code here;
  
  let result=0;
  for(let i=0; i< nums.length; i++){
    
    if(nums[i] === i){
      result++;
    }

  }

  return result;
}

// Do not edit this line;
module.exports = countOfAllIndexMatchingNumbers;
