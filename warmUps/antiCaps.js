  //loop through each letter in str
  //at each letter determine if its caps or not
  //if caps make lowercase, and vice versa
  //return new str

  function antiCaps(str){
      var newString="";

      for ( var i= 0; i< str.length; i++){
if(str[i] === str[i].toUpperCase()){
   newString += str[i].toLowerCase();
}else{
    newString += str[i].toUpperCase();

}

}
return newString;
  }


console.log(antiCaps('Hello')); 
 


