//testing frameworks for testing  MOCHA built into node and CHAI can be install by entering "npm install chai"
//into the terminal
//best way to test your code is to test your code against the expected result
//EXAMPLE:
//SYNTAX FOR ASSERT = assert= function(parameters:acutal,expected){}
// var assert = function(actual, expected) {
//     if (actual != expected) {
//         //Run if failed
//         throw { type: "Fail", details: { actual: actual, expected: expected } };
//     } else {
//         //Run if successful
//         console.log("Success", { type: "Test passed", details: { actual: actual, expected: expected } });
//     }
// };


//CHAI

var chai = require("chai");
var assert = chai.assert;
var helpCallbForFilt = require("../app.js");

var testCases = {
    case0: "code",
    case1: "ccc",
    case2: "cofe",
    case3: "xxxcorecodexxx"
}
describe("counting code warmup test", function() {
    it("should return 1", function() {
        assert.equal(helpCallbForFilt(testCases.case0), 1)
    });
    it("should return 0", function() {
        assert.equal(helpCallbForFilt(testCases.case1), 0)
    });
    it("should return 1", function() {
        assert.equal(helpCallbForFilt(testCases.case3), 1)
    });
})

// //Will pass
// assert(true, true);
// assert("Some string", "Some string");
// assert(1, 1);

// //Will Fail
// assert(true, false);
// assert("Some string", "Some other string");
// assert(2, 1);

var assertEqual = function(actual, expected) {
        if (actual !== expected) {
            throw {
                type: "fail",
                details: {
                    actual,
                    expected("Expected") + actual + "To equal " + expected
                }
            };
        } else {
            console.log("Success!", { type: "success", details: actual, expected: expected }
            });

        function describe(message, testFunc) {
            console.log("Test being run: " + message);
            try {
                testFunc();
            } catch (err) {
                //specify the err
                console.log(err);
            }

            function sum(x, y) {
                return x + y;
            }
        }

        describe("Sum function", //callback
                function() {
                    assertEqual(sum(6, 4), 10);
                }