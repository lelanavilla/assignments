var readline = require('readline-sync');  
var str = readline.question('What phrase would you like to encrypt? ').toLowerCase();  
var x = parseInt(readline.question('How many letters would you like to shift? '));  
function rot13(str) {
    var rotCharArray = [];
      var regEx = /[A-Z]/ ;
      str = str.split("");
      for (var x in str) {
        if (regEx.test(str[x])) {
          // A more general approach
        
          rotCharArray.push((str[x].charCodeAt() - 65 + 13) % 26 + 65);
        } else {
          rotCharArray.push(str[x].charCodeAt());
        }
      }
      str = String.fromCharCode.apply(String, rotCharArray);
      return str;
    
    }
    console.log(rot13());