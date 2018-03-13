//constructor functions normally have a capitalized function name and are used for making more dymanic objects
//before this weve been literally building objects(call object literals)
//ex: object literal
//var obj = {
//  key:value
//

//constructor functions have "this" throughout them
// ALL MENTION OF "THIS" INSIDE AN CONSTRUCTOR FUCNTION RELATES TO THE OBJECT
// {
//     firstName: <"user first name here">,
//     lastName: <"user last name here">,
//     age: <user age here>,
//     favoriteMovie: <"user favorite movie here">,
//     favoriteSport: <"user favorite sport here, if entered">
// 
// FUNCTION EXPRESSION WAY 
// var User = function (){}

// FUNCTION DECLARATION WAY 
//    function User(fName, lName, age, favMovie, favSport) {  
//     this.firstName = fName;
//     this.lastName = lName;
//     this.age = age;
//     this.favoriteMovie = favMovie;
//     this.favoriteSport = favSport;
//

//ALLOWS YOU TO DEFINE PROPERTIES ON AN OBJECT IN A MUCH MORE DYNAMIC WAY
//BY USING THE KEY OF KEY VALUE PAIRS AS PARAMETERS IN A FUNCTION
//BY DOING THIS THE KEY VALUE PAIR NOW BECOMES "THIS.(PROPERTY NAME)" OR "KEY"




//CALLING CONSTRUCTOR FUNCTIONS WITH "NEW" which means create a new object
//EXAMPLE: let Ben = new User("Ben", "updated-email", "updated- password");
// var employeeStatus = function(){
//     if (status = true)[
//         status = "Part-Time";
// }else{
//     status = "Contract";
// }
// }

function EmployeeForm(name, title, salary, status){//in es6 you can set admin= value inside the parameter area){
    this.employeeName = name;
    this.jobTitle = title;
    this.annualSalary = salary;
    this.employeeType = status;
    //you can put this.admin = true/false or whatever you want the default of admin to be for every user

}


// function addToEmployeeForm(employee){
    // EmployeeForm.push(employee);
}
//     function printEmployeeForm(){
//         console.log(employeeForm);
//     }
//     }
// }
// function updateEmployeeForm(name, title, salary, status){
//     let updatedInfo = new EmployeeForm(name);
//     addTodataBase(newEmployee);
//     displayDataBase();
// }

//doesnt matter where you put the below prototype function as the  anywhere in code just AFTER the define the constructor Function so the object is defined already.
// NOT SURE IF THIS IS CORRECT FOR THE DEFAULTED SECTION
// EmployeeForm.prototype.defaultStatus = function (status){
    // this.status = fullTime;
// }
 

var joe = new EmployeeForm ("Joe", "laborer", "$35000", "part-time");
addToEmployeeForm(new EmployeeForm);
printEmployeeForm(joe);
var amy = new EmployeeForm ("Amy", "Assistant", "$40000");
addToEmployeeForm(new EmployeeForm);
printEmployeeForm(amy);
var jill = new EmployeeForm ("Jill","Receptionist", "$32000","contract");
addToEmployeeForm(newEmployeeForm);
printEmployeeForm(jill);
}

var employeeArr = printEmployeeForm(addEmployee());
//HOW TO CREATE AN INTERACTIVE INTERFACE 
//CREATE A 'PROTOTYPE' WHICH IS A SET OF PROPERTIES  THAT EVERY OBJECT THAT IS A MEMEBER OF THE CONSTRUCTOR YOU CREATED HAS.
//CALLED PROTOTYPICAL INHERITANCE
//THE PROTOTYPE PROPERTIES ARE NON-INUMERABLE

//EXAMPLE:
//User.prototype