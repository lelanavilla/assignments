function doubleNumbers(numbers) {
    return numbers.map(function(number) {
        return number * 2;
    });

}

doubleNumbers([2, 5, 100]);

function stringItUp(numbers) {
    return numbers.map(function(number) {
        return number >= 5;
    });

}

stringItUp([2, 5, 100]);


function namesOnly(names) {
    return object.names.map(function(name) {
        return object.name.toString();
    });

}

namesOnly([{
        name: "Angelina Jolie",
        age: 80
    },
    {
        name: "Eric Jones",
        age: 2
    },
    {
        name: "Paris Hilton",
        age: 5
    },
    {
        name: "Kayne West",
        age: 16
    },
    {
        name: "Bob Ziroll",
        age: 100
    }
]);



function makeStrings(names) {
    return names.map(function(name) {
        if (name.age >= 18) {
            console.log(name + " can go to the Matrix.");
        } else {
            console.log(name + " cannot go to the Matrix.");
        }
    });

}

makeStrings([{
        name: "Angelina Jolie",
        age: 80
    },
    {
        name: "Eric Jones",
        age: 2
    },
    {
        name: "Paris Hilton",
        age: 5
    },
    {
        name: "Kayne West",
        age: 16
    },
    {
        name: "Bob Ziroll",
        age: 100
    }
]);