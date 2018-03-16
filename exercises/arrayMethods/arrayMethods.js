function sortedOfAge(ages) {
    var sortedAge = ages.sort(function(age) {
        if (age <= sortedAge) {
            console.log();
        }
    })
}


sortedOfAge([{
    firstName: "Sarah",
    lastName: "Palin",
    age: 47
}, {
    firstName: "Frank",
    lastName: "Zappa",
    age: 12
}, {
    firstName: "Rick",
    lastName: "Sanchez",
    age: 78
}, {
    firstName: "Morty",
    lastName: "Smith",
    age: 13
}, {
    firstName: "Kyle",
    lastName: "Mooney",
    age: 27
}]);