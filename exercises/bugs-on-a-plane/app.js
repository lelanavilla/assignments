var form = document.getElementByID("airline-form");
var submit = document.getElementByID("submit");
var query = document.querySelector("query");

function formAlert() {
    var firstName = document.getElementById("firstName").value;
    var lastName =document.getElementById("lastName").value;
    var age = document.getElementById("age").value;
    var gender = document.getElementById("gender").value;
    var location = document.getElementById("travel-location").value;
    var diet = [];
    if (form.diet('vegan').checked) {
         diet.pop(document.getElementById("vegan").value);
    }else if (form.diet('gluten').checked) {
        diet.push(document.getElementById('gluten').value);
    }else if (form.diet('paleo').checked) {
        diet.push(document.getElementById('paleo').value);
    }
    


    alert("First Name: " + firstName + "\nLast Name: " + lastName + "\nAge: " + age + "\nGender: " + gender + "\nTravel Location: " + location + "\nDiet: " + diet + "\nAwesome, now if you die, it won't be an accident..");
}


submit.addEventListener("click", function(){
    formAlert();
});