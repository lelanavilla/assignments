function leastToGreatest(arr) {
    return arr.sort();

}

leastToGreatest([1, 3, 5, 2, 90, 20]);



function leastToGreatest(arr) {
    return arr.sort().reverse();

}

leastToGreatest([1, 3, 5, 2, 90, 20]);

function lengthSort(arr) {
    return arr.sort(arr <= arr.length);

}

lengthSort(["dog", "wolf", "by", "family", "eaten"]);


function alphabetical(words) {
    return words.filter(function(word) {
            return word.filter(function(letters) {
                return letters.filter(function(letter) {
                    return letter.toCharCode(function(num) {
                        return num.sort();
                        return num.charCodeAt().sort();


                    });
                });
            });

        }
    });
}

alphabetical(["dog", "wolf", "by", "family", "eaten"]);