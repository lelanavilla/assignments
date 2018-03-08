 function oneToHun() {
     var arr = [];
     for (var i = 1; i <= 101; i++)
         if (i % 3 === 0 && i % 5 === 0) {
             arr.push("fizzbizz");
         } else if (i % 3 === 0) {
         arr.push("fizz"); //  
     } else if (i % 5 === 0) {
         arr.push("bizz");
     } else {
          arr.push(i);
     }
     return arr;
 }
 console.log(oneToHun());