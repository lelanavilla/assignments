
var rot13 = function(str, x) {

  var readline = require('readline-sync');  
var str = readline.question('What phrase would you like to encrypt? ').toLowerCase();  
var x = parseInt(readline.question('How many letters would you like to shift? '));  
  var siphered = str.charCodeAt(x)-65 +13 %26 +65;
  var answer;
  answer.push(siphered);

    // var rotCharArray = str;
      // var regEx = /[A-Z]/ ;
      // str = str.split("");
      // for (var x in str) {
      //   if (regEx.test(str[x])) {
          // A more general approach
        
          // var rotStr =
          // rotStr.push((str(x).charCodeAt() - 65 + 13) % 26 + 65);
        // } else {
          // rotCharArray.push(str[x].charCodeAt());
        };
      
      // var resultStr = String.fromCharCode.apply(String, rotStr);
      
      
  
  