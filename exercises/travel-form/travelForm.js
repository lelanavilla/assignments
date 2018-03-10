var fName = document.getElementById("fName").addEventListener("input", function(){
    var firstName = document.fName.value;
})
var lName = document.getElementById("lName");
var age = document.getElementById("age");

var fGender = document.getElementById("fGender").;
var mGender =document.getElementById("mGender");

gender.target.addEventListener("click",function (){
    if (fGender === true){
        event.target.gender = "Female";
    
    }else {
        event.target.gender = "Male";
    }
});
//thios could habve all been set to specify a data set, that you made in to sets by giving them all the same id
//and it would have avoid haivng to write out each option..
//the simplied code is 
//
var california = document.getElementById("california");
var paris = document.getElementById("paris");
var newyork = document.getElementById("newYork");


var dietDairy = document.getElementById("dietDairy");
var dietGluten = document.getElementById("dietGluten");
var dietPeanut = document.getElementById("dietPeanut");

var button= document.getElementById("submit").addEventListener("submit", function(){
    alert("Thank you" + firstName + lName + age);


   //beginning of more correct code 
    var form = document.getElementByID("airline-form");
var submit = document.getElementByID("submit");
var query = document.querySelector("query");

function formAlert() {
    var firstName = form.elements("fName").value;
    var lastName = form.elements("lName").value;
    var age = form.elements("age").value;
    var gender = form.elements("gender").value;
    var location = form.elements("locations").value;
    var diet = [];
    if (form.elements('dairy').checked) {
         diet.pop(document.getElementById("dairy").value);
    }
    if (form.elements('gluten').checked) {
        diet.push(document.getElementById('gluten').value);
    }
    if (form.elements['peanut'].checked) {
        diet.push(document.getElementById('peanut').value);
    }


    alert("First Name: " + firstName + "\nLast Name: " + lastName + "\nAge: " + age + "\nGender: " + gender + "\nTravel Location: " + location + "\nDiet: " + diet + "\nThanks for your time.");
}


submit.addEventListener("click", formalert);