
// another way
// var codeCount = function (str){
//     var count=0;
//     for(var i =0; i<str.length;i++){
//         if(str[i] + str[2] + str[3] === "coe"){
//             count++;
//         }
//     }
//         console.log(count);
// }
// codeCount("cozexxcope");



//bens way

function countCode(str){
    var count =0;
    var regEx = /co\we/g;
    //we knoow the index is tracked with each regex. exec call
    // no match returns null  which is falsy;
    while(regEx.exec(str)){
        count++;
    }
console.log (count);
}
countCode("codssefhgk");


function ifNum(str){
    if(str === number){
        console.log("true");
    }else{
        console.log("false");
    }
    
}