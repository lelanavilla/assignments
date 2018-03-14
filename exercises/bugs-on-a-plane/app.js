var form = document.getElementByID("airline-form");
var submit = document.getElementByID("submit");
var query = document.querySelector("query");

function formAlert() {
    var firstName = form.element("firstName").value;
    var lastName = form.element("lastName").value;
    var age = form.element("age").value;
    var gender = form.elements("gender").value;
    var location = form.elements("travel-location").value;
    var diet = [];
    if (form.elements('vegan').checked) {
         diet.pop(document.getElementById("vegan").value);
    }else if (form.elements('gluten').checked) {
        diet.push(document.getElementById('gluten').value);
    }else if (form.elements('paleo').checked) {
        diet.push(document.getElementById('paleo').value);
    }
    


    alert("First Name: " + firstName + "\nLast Name: " + lastName + "\nAge: " + age + "\nGender: " + gender + "\nTravel Location: " + location + "\nDiet: " + diet + "\nAwesome, now if you die, it won't be an accident..");
}


submit.addEventListener("click", formalert);