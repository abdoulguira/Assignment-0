function sumOfNumsWithinARange(nums, start, end) {
  // Insert code here;
  
  let result=0;
  for(let i=0; i< nums.length; i++){
    

    if(nums[i]>=start && nums[i]<=end){
      result++;
    }

  }

  return result;
}

// Do not edit this line;
module.exports = sumOfNumsWithinARange;
