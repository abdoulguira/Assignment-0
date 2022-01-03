function pairSum(nums, target) {
  // Insert code here;
  
  let result=0;
  for(let i=0; i<nums.length-1; i++){

    for(let j=i+1; j<nums.length; j++){
      result = nums[i] + nums[j];
      if(result === target) return true;

    }

  }
  return false;
}

// Do not edit this line;
module.exports = pairSum;
