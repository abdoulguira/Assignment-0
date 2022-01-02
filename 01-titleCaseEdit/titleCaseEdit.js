function titleCaseEdit(title) {
  // Insert code here;
  const stringArray= title.split(' ');
  
  let result='';
   for(let i=0;i<stringArray.length;i++){
    
     result += stringArray[i].charAt(0).toUpperCase() + stringArray[i].slice(1,stringArray[i].length) + ' ';

   }
  return result;
  
}

// Do not edit this line;
module.exports = titleCaseEdit;
