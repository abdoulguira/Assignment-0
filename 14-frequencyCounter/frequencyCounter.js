function frequencyCounter(word) {
  // Insert code here;
  
  let arr=[];
  var obj ={};
  let count=0;

  for(let i=0; i<word.length; i++){
    if ( arr.indexOf(word[i]) === -1 ){
      arr.push(word[i]);
    } 

  }

   for(let i=0; i< arr.length; i++){

     count=0;
     for(let j=0; j< word.length; j++){
       if(arr[i]===word[j]) count++;
     }
       
    obj[arr[i]]=count;
  }
  
  return obj;
}

// Do not edit this line;
module.exports = frequencyCounter;
