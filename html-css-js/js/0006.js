
const fs = require("fs");
// 类似于颗粒化操作  发布订阅

let events = {
    _arr:[],
    on(fn){
        this._arr.push(fn);
    },
    emit(...args){
        this._arr.forEach(fn=>fn(...args));
    }
}
const obj = {}
// 每次发布把数据存起来
events.on(function(key,value){
    obj[key] = value
})
// 当条件满足是时，做自己想干的事
events.on(function(){
    if(Object.keys(obj).length===2){
        console.log(obj)
    }
})
// 实现 {a:"aaa", b:"bbb"}
fs.readFile("./fs-a.txt", "utf-8", function (err, data) {
    events.emit("a", data);
})
fs.readFile("./fs-b.txt", "utf-8", function (err, data) {
    events.emit("b", data);
})

// 观察着模式   发布订阅
