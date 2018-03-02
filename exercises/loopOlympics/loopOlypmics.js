var array = ['1', '2', '3', '4', '5', '6', '7', '8', '9'];
for (var i = 0; i < 10; i++) {
    console.log(i);
}
for (var i = 10; i >= 0; i--) {
    console.log(i);
}
var countOfNum = 100;
for (var i = 0; i < countOfNum.length; i++) {
    i % 2 === 0;
    console.log(countOfNum[i]);
}

var fruit = ["banana", "orange", "apple", "kiwi", "pear", "peach"];
for (var i = 0; i < fruit.length; i++) {
    console.log(fruit[i]);
}

var numbers = [];
for (var i = 0; i < 10; i++) {
    numbers.push[i];
}

var evenNum = [];
for (var i = 0; i <= 101; i++) {
    if (i % 2 === 0) {
        evenNum.push(i);
    }
}
console.log(evenNum);

var fruit = ["banana", "orange", "apple", "kiwi", "pear", "peach"]
var fruitArr =[];
for( var i = 0; i < fruit.length; i += 2){
    fruitArr.push(fruit[i]);

}
console.log(fruitArr);


var peopleArray = [  
    {
      name: "Harrison Ford",
      occupation: "Actor"
    },
    {
      name: "Justin Bieber",
      occupation: "Singer"
    },
    {
      name: "Vladimir Putin",
      occupation: "Politician"
    },
    {
      name: "Oprah",
      occupation: "Entertainer"
    }
  ]

 for( var i = 0; i < peopleArray.length; i++){
     console.log(peopleArray[i]);
 }
 var names= [];
 var occupations = [];
  for ( var i = 0; i < peopleArray.length; i ++){
      if( i % 2 === 0){
names.push(peopleArray[i].name);
} else {
    occupations.push(peopleArray[i].occupation);
}

  }
  console.log(names);
  console.log(occupations);

  var arr= [];
  for( var i = 0; i < 3; i++){
      for(var j =0; i < 3; j++){
      arr[i][j];
      }
  }