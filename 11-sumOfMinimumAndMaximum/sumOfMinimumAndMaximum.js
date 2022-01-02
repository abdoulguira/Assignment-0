function sumOfMinimumAndMaximum(nums) {
  // Insert code here;
  
  let result=0;
  let sortedNums= nums.sort( function(a, b) {return a-b} );
  
  result =sortedNums[0] + sortedNums[nums.length-1];

  return result;
}

// Do not edit this line;
module.exports = sumOfMinimumAndMaximum;
