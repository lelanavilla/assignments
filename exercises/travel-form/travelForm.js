var travelFrom = document.getElementByID("main-form");
var submit = document.getElementByID("submit");
var firstName = travelForm("fName").value;
var lastName = travelForm("lName").value;
var age = document.getElementById("age").value;

var gender = document.getElementById("gender");
if (document.getElementById('mGender').checked) {
    document.gender.mGender = true;
} else if (document.getElementById('fGender').checked) {
    document.gender.fGender = true;

    var location = document("locations").value;


    var dairy = document.getElementById("dairy").addEventListener("checked", function(event); {
                if (travelForm('dairy').checked) {
                    diet.diary === true;
                }
                if (travelForm('gluten').checked) {
                    diet.push(document.getElementById('gluten').value);
                }
                if (travelForm('peanut').checked) {
                    diet.push(document.getElementById('peanut').value);
                }
                travelForm.submit.addEventListener("click", function(event) {
                    event.preventDefault();
                    event.target.submit;
                });

                alert("First Name: " + firstName + "\nLast Name: " + lastName + "\nAge: " + age + "\nGender: " + gender + "\nTravel Location: " + location + "\nDiet: " + diet + "\nThanks for your time.");
            }