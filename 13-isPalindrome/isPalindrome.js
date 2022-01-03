function isPalindrome(word) {
  // Insert code here;
  
  if(word.length===0 || word.length===1){
    return true;
  }

  if(word.charAt(0) === word.charAt(word.length-1)){
    return isPalindrome(word.substring(1,word.length-1));

  }

  return false;
}

// Do not edit this line;
module.exports = isPalindrome;
