    var person = sortedOfAge([{


            firstName: "Sarah",
            lastName: "Palin",
            age: 47
        },
        {
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
        }
    ]);
    //sort ages of people by 18 and over
    function isOldEnough(person) {
        return person.age >= 18;
    }

    function sortedAge(arr) {
        return arr.sort(function alphaSort(person1, person2) {
                    var lstN1 = person1.lastName;
                    var lstN2 = person2.lastName;
                    return lstN1.localCompare(lstN2);


                    function sortedOfAge(arr) {
                        return arr.filter(isOldEnough).sort(byAlpha)
                    }

                    function byAge(person1, person2) {
                        var age1 = person1.age;
                        var age2 = person2.age;
                        return age2 - age1;
                    }

                    function toLi(person) {
                        return "<li>" + person.firstName + " " + person.lastName + "is" + person.age + "<li>";
                    }

                    function ageSortLi(arr)
                    return arr.sort(byAge).map(toLi);
                }