// 判断一个数据的类型
// 判断函数类型有几种方式 typeof, Object.prototype.toString instanceof  constructor
// function isType(type, val){ // [object String]
//     return Object.prototype.toString.call(value) === `[object ${type}]`
// }
// let flag = isType("string", "abc");

// function isType(type) {
//     return function (value) {
//         return Object.prototype.toString.call(value) === `[object ${type}]`
//     }
// }

// let isString = isType("String")
// let isNumber = isType("Number");
// console.log(isString('abc'))
// console.log(flag)


// 通用的柯里化函数，就是根据调用的时候传递的参数，和函数的参数 做判断， 如果传递的参数和定义的参数一致，就让函数执行

function isType(type) {
    console.log("isType-type",type);
    return function (value) {
        console.log("isType-value",value);
        return Object.prototype.toString.call(value) === `[object ${type}]`
    }
}
const curry = fn => {
    // 需要有一个记录参数的变量 args
    const inner = (args = []) => {
        console.log(fn, "----",fn.length,"-----",args.length,"-----",args);
        // 每次都用一个新的数组 + 自己的参数
        return fn.length <= args.length ? fn(...args) : (...a) =>{
            console.log(1)
            return inner([...args, ...a])
        } 
    }
    return inner();
}

const type = curry(isType);
let isString = type("String")
let isNumber1 = type("Number")
console.log(isString("abc"))
// console.log(isNumber1("abc"))
// function sum(a, b, c, d, e) { // fn.length 就是sum的个数
//     return a + b + c + d + e;
// }



// let newSum = curry(sum);

// let fn1 = newSum(1, 2);
// let fn2 = fn1(3, 4);
// let r = fn2(5)
// // let r = newSum(1)(2)(3)(4)(5)
// console.log(r);