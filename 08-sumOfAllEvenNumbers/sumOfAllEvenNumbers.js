function sumOfAllEvenNumbers(nums) {
  // Insert code here;
  
  let result=0;
  for(let i=0; i< nums.length; i++){
    let rest= nums[i]%2;

    if(rest === 0){
      result++;
    }

  }

  return result;
}

// Do not edit this line;
module.exports = sumOfAllEvenNumbers;
