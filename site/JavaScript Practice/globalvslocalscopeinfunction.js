/* it is possible to have be the local and global variable with the same name when you do this, the local variable 
takes precedence over the global variable
in this example: */
const someVar = "Hat";
function myFun(){
    const someVar = "Head";
    return someVar;
}
/* the function myFun will return the string "head" because the local version of the variable is present.