class MySolution {
  constructor() {
    this.flag = false; // this is optional to use;
  }

  binarySearch(nums, target) {
    // Insert code here;
    
   if(!nums.length) return false;
   let mid= Math.floor(nums.length/2);
   if(target===nums[mid]) return true;
   if(target > nums[mid]) return binarySearch(nums.slice(mid+1), target);
  
   if(target < nums[mid]) return binarySearch(nums.slice(0,mid),target);
    
  }
}

// Do not edit this line;
let StudentSolution = MySolution;
module.exports = StudentSolution;
