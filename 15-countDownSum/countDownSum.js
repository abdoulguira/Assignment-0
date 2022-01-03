class MySolution {
  countDownSum(num) {
    // Insert code here;
    
    // the base cases
    if(num===0) return 0;
    if(num===1) return 1;
    
    // recurse
    return countDownSum(num-1) + num;
    
  }
}

// Do not edit this line;
let StudentSolution = MySolution;
module.exports = StudentSolution;
