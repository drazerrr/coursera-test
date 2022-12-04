function nextInLine(arr,item){
    arr.push(item);
    return arr.shift();
}
// Display Code
console.log("Before"+ JSON.stringify(testarr));
console.log(nextInLine(testarr,6));
console.log("after"+JSON.stringify(testarr));
