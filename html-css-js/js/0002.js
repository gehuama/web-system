let arrOne = [1,2,3,4,5,6];
let arrTwo = [{name:"小黑", age: 20},{name:"小红", age: 21},{name:"小黄", age: 22}];

arrOne.forEach((item)=>{
    console.log(item +1)
    item = item +1;
})
arrTwo.forEach((item)=>{
    item.name = item.name +1;
})
console.log(arrOne);
console.log(arrTwo);