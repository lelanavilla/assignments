var dog = 5;
var cat = 3;
if (dog > cat && cat === cat) {
    console.log(dog + " is greater than " + cat);
    console.log(cat + " is the length");

} else if  (cat === dog) {
    console.log("not the same");
};

var person = {
name : "Sam",
age: 14
}
if(person.age >= 18 && person.name === "B" ){
    console.log( person.name + " is allowed to go to the movie"); 
}else {
    console.log(person.name + " is not allowed to go to the movie");
};

if ( 1 === "1"){
    console.log ("strict");
}else if( 1 == "1"){
    console.log("loose");
}else{
    console.log("not equal at all");
};

if((1 >= 2 && 2 === 4) || (3 * 4 ) > 10 && (5 + 10) > 10) {
    console.log("yes");
};


if (typeof "dog" ==="string"){
     console.log("string");


};

console.log(typeof true);
 var v="";   
if(v === "defined" ){
console.log("defined");
}else {
    console.log("undefined");
}

var letters =("a,b,c");
var numbers = 2
if ( letters < numbers){
    console.log(letter);
}else{
    console.log("they arr different types silly");
}
var myNum  = 10;
if(myNum % 2 === 0){
    console.log("even");
}else if ( myNum % 2 === 1){
    console.log("odd");
}