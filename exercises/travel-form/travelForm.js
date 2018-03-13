function formAlert() {
    var formElement = document.getElementByID("main-form");
    var submit = formElemwent.getElementByID("submit");
    var firstName = formElement("fName").value;
    var lastName = formElement("lName").value;
    var age = formElement("age").value;
    var gender = formElement("gender").value;
    var location = formElement("locations").value;
    var diet = [];
    if (formElement('dairy').checked) {
         diet.pop(document.getElementById("dairy").value);
    }
    if (formElement('gluten').checked) {
        diet.push(document.getElementById('gluten').value);
    }
    if (formElement('peanut').checked) {
        diet.push(document.getElementById('peanut').value);
    }
    submit.addEventListener("click", formalert);

    alert("First Name: " + firstName + "\nLast Name: " + lastName + "\nAge: " + age + "\nGender: " + gender + "\nTravel Location: " + location + "\nDiet: " + diet + "\nThanks for your time.");
}


