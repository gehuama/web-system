// 判断一个数据的类型
// 判断函数类型有几种方式 typeof, Object.prototype.toString instanceof  constructor
// function isType(type, val){ // [object String]
//     return Object.prototype.toString.call(value) === `[object ${type}]`
// }
// let flag = isType("string", "abc");

function isType(type) {
    return function (value) {
        return Object.prototype.toString.call(value) === `[object ${type}]`
    }
}

let isString = isType("String")
let isNumber = isType("Number");
console.log(isString('abc'))
// console.log(flag)


// 通用的柯里化函数，就是根据调用的时候传递的参数，和函数的参数 做判断， 如果传递的参数和定义的参数一致，就让函数执行

const curring = (fn) => {
    // 存储用户调用的参数
    const inner =(...args)=>{
        args = args.splice(0,1)
        args.push(arr);
        // 如果传递的参数个数大于等于定义的
        return args.length >=fn.length ?  fn(...o):inner(...args, ...o);
    }
    return inner;
}

let type = curring(isType);
let isString = type("String")
let isNumber = type("Number")

console.log(isString("abc"))
console.log(isString(123))
// function sum(a, b, c, d, e) { // fn.length 就是sum的个数
//     return a + b + c + d + e;
// }



// let newSum = curring(sum);

// let fn1 = newSum(1, 2);
// let fn2 = fn1(1, 2);
// let r = fn2(5)
// console.log(r);