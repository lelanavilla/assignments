var fruit = ["banana", "apple", "orange", "watermelon"];  
var vegetables = ["carrot", "tomato", "pepper", "lettuce"];
var fruitArr = fruit.pop()
var vegetablesArr = vegetables.pop()
console.log(fruitArr);
console.log(vegetablesArr);

var firstFruit= fruit.shift();
var firstVegetable = vegetables.shift();

console.log(firstFruit);
console.log(firstVegetable);

var a = fruit.indexOf("orange");

console.log(a);

var b = fruit.push(1);

console.log(b);

var c = vegetables.length;

console.log(c);

var d= vegetables.push(vegetables.length);
console.log(d);

var food = fruit.concat(vegetables);

console.log(food);

var foodTwo= food.push(4,2);
console.log(foodTwo);

var foodStr = foodTwo.toString();

console.log(foodStr);