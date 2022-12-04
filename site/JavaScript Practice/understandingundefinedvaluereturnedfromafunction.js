/* A function can include the return statement but it does not have to in the case that the function doesn't have
the return statement when you call it the function processes inner code but the return value is underfined.

Example:*/
let sum = 0;
function addSum(num){
    sum = sum+num;
}
addSum(3);
/* addSum is a function without a return statement the function will change the global sum variable but the returned value
of the function is undefined */