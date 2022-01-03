function fizzBuzz(start, end) {
  // Insert code here;
  
  let arr=[];
  for(let i=0; i<=end-1; i++){
    arr[i]=start;
    if(start%3 ===0 && start%5===0){
      arr[i]= 'FizzBuzz';
      
    }
    else if(start%5 ===0){
      arr[i]= 'Buzz';
  
    }
    else if(start%3===0){
      arr[i]= 'Fizz';
     
    }
    else{
      arr[i]= start;
    }

    start++;
    
  }

  return arr;
  

}

// Do not edit this line;
module.exports = fizzBuzz;
