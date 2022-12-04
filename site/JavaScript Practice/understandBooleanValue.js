/* Another data type is the boolean. booleans may only be one of two value true is on and false is off. these two states are
mutually exlusive.
Note: Boolean value are never written with quites the string "true" and "false" are not Boolean and have no special meaning in JavaScript.
// use conditional logic with if statement
if statements are used to make decision in code the key if tells javascript to excute the code in the curly braces under certain conditions and they may only the true or false conditions.
when condition evaluates to true the program executes the statement inside the curly braces when the boolean condition evaluates to false
the statement inside the curly braces will not execute.
pseudocode
*/
function test(myCondition) {
    if(myCondition){
        return console.log("Itwastrue");
    }
    return console.log("Itwasfalse");
}
test(true);
test(false);
/* test(true) return the string it was true and test(false) returns the string it was false

when test is called with a value of true the if statement evaluate myCondition to see if it is true or not Since it is true, the function return it was true
when we call test with a value of false myCondition is not true and statement is the curly braces is not ecescuted and the function return it was false.