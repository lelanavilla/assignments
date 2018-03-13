
var arr =  [3, 5, 2, 8, 1];
function largestNum(arr){
    var results= arr[0];
    for(var i =0; i < arr.length; i++){
        if(results< arr[i]){
            results = arr[i];            
        }
    
    }
    return results;
}
    console.log(largestNum(arr));

  var isDivisible = function (num1, num2){
      if(num1 > num2){
           //how do i write  is num1 dvisible by num 2){
          //return true;
}


 
};
 isDivisible(4, 2)
isDivisible(9, 3)  
isDivisible(15, 4)
    
    
//     function justExclam(arr){
//     var arr =["#3", "$$$", "C%4!", "Hey!"];
//     for(var i = 0; i< arr.length; i++){
//     if(arr[i].includes("!",[0]){
//         return arr[i];
//     }
//     }
// }