function fiveAndGreaterOnly(arr) {
    return numbers.filter(function(number) {
        return number >= 5;

    });

}

fiveAndGreaterOnly([3, 6, 8, 2]);


function evensOnly(numbers) {
    return numbers.filter(function(number) {
        return number % 2 = 0;

    });

}

evensOnly([3, 6, 8, 2]);


function fiveCharactersOrFewerOnly(characters) {
    return characters.filter(function(character) {
        return character.length > 5;
    });

}

fiveCharactersOrFewerOnly(["dog", "wolf", "by", "family", "eaten", "camping"]);


function peopleWhoBelongToTheIlluminati(members) {
    return object.members.filter(function(member) {
        return object.member = true;
    });

}

peopleWhoBelongToTheIlluminati([{
        name: "Angelina Jolie",
        member: true
    },
    {
        name: "Eric Jones",
        member: false
    },
    {
        name: "Paris Hilton",
        member: true
    },
    {
        name: "Kayne West",
        member: false
    },
    {
        name: "Bob Ziroll",
        member: true
    }
]);

function ofAge(ages) {
    return object.age.filter(function(ages) {
        return object.age < 18;
    });

}

ofAge([{
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