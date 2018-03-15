// var myName = "John Doe";
// console.log(name);

// try {
//     console.log(name);
// } catch (err) {
//     throw "try again";
// } finally {
//     var name = "John Doe";
//     console.log(name);
// }

// function movieCheck(age) {
//     if (age < 0) {
//         throw "Error cannot be less than 0";
//     } else if (age <= 12) {
//         console.log("You can see PG movies");
//     } else if (age >= 13 && age < 18) {
//         console.log("You can see PG-13 movies");
//     } else if (age >= 18) {
//         console.log("You can see R rated movies");
//     }
// }
// movieCheck();
// // try {
// //     console.log(movieCheck(age));
// // } catch (err) {
// //     console.log(err);
// // } finally {
// //     movieCheck(age);
// // }
// // movieCheck();


// function sum(x, y) {
//     //check data types first and throw error
//     if (typeof x !== "number" || typeof y !== "number") {
//         throw "input must be a number";
//         //when using "throw you do not need to return because throw kills the string"
//     }
//typeOf returns a string
//     return x + y;
// }

// try {
//     sum("1", "2");
// } catch (err) {
//     console.log(err);
// }



function login(username, password) {
    var user = { username: "sam", password: "123abc" };
    if (user.username && user.password !== user.username && user.username.password) {
        throw " your names do not match, try again!";
    } else {
        console.log("login successful");
    }

    try {
        login(user("amy", "1234.com"));
    } catch (err) {
        console.log(err);
    }
}
//check credentials

// // console.log(thishasnoreference);
// // console.log("im code after the reference err, but youll never see me because im after the error");
// // //try and catch syntax

// try{
//     console.log(thishasnoreference);
// }catch(err){
//     // do something with the error
//     console.log(err);
// }finally{
//     //run this code,no matter what
// }

// console.log('Im code after the try block');


// //FUNCTION THAT REQUESTS DATA FROM THE  API SERVER
// //write function that randomly determines whether the request was successful
// function


// //write function that randomly determines whether the request was successful
// function sendResponse(){
//     var success = Math.random();
//     if(success <.5){
//         return{
//             date:{
//                 username: "Btdev29",
//                 email:"bt.dev@29dev.com"
//             }
//         }
//     }else{
//         //you can throw youre own error if wanted
//         throw "Server is Down";   
//      }
// }

// //write function that handles the response from the request

// function login(){
//     try{
//         var data = sendResponse();
//         console.log(data);
//     }catch(err){
//         console.log(err);
//     }
// }
// loginin()