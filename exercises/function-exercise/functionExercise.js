function sum(a, b) {
    return a + b;

}
sum(2, 7);

function theLargestNum() {
    var arr = [1, 2, 3];
    var largest = arr.sort().pop();
    console.log(largest);
}
theLargestNum();

function oddOrEven(num) {
    if (num % 2 === 0) {
        console.log(num + " is even.");
    } else if (num % 2 === 1) {
        console.log(" is odd");
    }
}
oddOrEven(4);


function myStr(str) {
    if (str.length < 20) {
        console.log(str + str);
    } else if (str.length > 20) {
        console.log(str.length / 2);
    }
}

myStr("hi,good day");

var fibonacci_series = function(n) {
    if (n === 1) {
        return [0, 1];
    } else {
        var s = fibonacci_series(n - 1);
        s.push(s[s.length - 1] + s[s.length - 2]);
        return s;
    }
};

console.log(fibonacci_series(8));
var mySeq = [0, 1, 1, 2, 3, 5, 8, 13, 21]

function getSum(total, num) {
    total + num;
    mySeq.reduce(mySum);
}

function quad(a, b, c) {
    var xValues = [];
    a = eval(a.value);
    b = eval(b.value);
    c = eval(c.value);
    x1 = -b / 2 / a + Math.pow(Math.pow(b, 2) - 4 * a * c, 0.5) / 2 / a;
    x2 = -b / 2 / a - Math.pow(Math.pow(b, 2) - 4 * a * c, 0.5) / 2 / a;
    x1.value = x1;
    x2.value = x2;
    xValues.push(x1, x2);
    if (x1.value == "NaN") x1.value = "Imag.!";
    if (x2.value == "NaN") x2.value = "Imag.!";
    console.log(xValues);
}
quad(2, 4, 5);