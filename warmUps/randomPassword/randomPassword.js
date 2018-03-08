function randomPassword(str){
    var charSet ="abcdefghijklmnopqrstuvwxyz0123456789";
    
    for( var i=0; i < charSet.length;i++){
      var random=  Math.random().toString(36).slice(2);
    
    }
    return random
}
console.log(randomPassword());

//bens way of doing it

//function genPwdAscii(pwdLength)