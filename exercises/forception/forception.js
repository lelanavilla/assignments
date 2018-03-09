var people = ["Jon", "Jacob", "Jingle", "Heimer", "Schmidt"];  
var alphabet = "abcdefghijklmnopqrstuvwxyz";  
var combo = []
function blended(){
 alphabet.toUpperCase();
    for(var i =0; i <= 26; i++){
        
        for(var j = 0; j < people.length; j+= 27 ){
            while(i <= 26 && j === 0 || j === 27){
                i++;
                j++;
             combo.push([j],i);
                                }
            }
        }
    }

console.log(blended());

    
