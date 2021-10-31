
// 1. before方法 对原函数进行扩展
// 2. 0004.js中的curry方法 暂存变量
// 3. after函数 函数返回函数 会造成函数嵌套
// 解决异步问题
const fs = require("fs");

// let obj = {}; // 类似于颗粒化操作
const after = (times, callback) => {
    let obj = {};
    return (key, value) => {
        obj[key] = value
        if (--times == 0) {
            callback(obj);
        }
    }
}

let out = after(2, (obj) => {
    console.log(obj);
})

//读取文件都采用绝对路径，相对路径会参考你执行文件的路径
// 实现 {a:"aaa", b:"bbb"}
fs.readFile("./fs-a.txt", "utf-8", function (err, data) {
    // obj.a= data;
    out("a", data);
})
fs.readFile("./fs-b.txt", "utf-8", function (err, data) {
    // obj.b= data;
    out("b", data);
})
// setTimeout(() => {
    // console.log(JSON.stringify(obj));
// }, 100);

