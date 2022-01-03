function setUnionOfAnyAmountOfSets(...args) {
  // Insert code here;
  
  var set = new Set();
  let arr = args;
  let result=[];
  
  let t=0;
  for(let i=0; i<arr.length; i++){

    for(let j=0; j<arr[i].length; j++){
      result[t]=arr[i][j];
      set.add(result[t]);
      t++;
    }
   
  }
  
   for (let value of set) alert(value);
  
  return set;
}

// Do not edit this line;
module.exports = setUnionOfAnyAmountOfSets;
