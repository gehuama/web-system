let arr = [6,3,5];
let res = typeof arr;
console.log("typeof对array操作结果", res);
console.log("typeof对undefined操作结果", typeof undefined);
console.log("typeof对null操作结果", typeof null);
console.log("typeof对NaN操作结果", typeof NaN);
console.log("得到NaN值", Number("a"+1));
try {
    let a = null;
    let {id} = a;
    console.log("a值为null操作结果",id);
} catch (error) {
    console.log("a值为null操作结果",error);
}
let a = {};
let {id} = a;
console.log("a值为{}操作结果",id);

class action {}
console.log("typeof对class类操作结果",typeof action);


export const isObject = (val) => typeof val == "object" && val != null; // 是不是对象
export const isSymbol = (val) => typeof val == "symbol"; // 是不是symbol
export const isArray = Array.isArray; // 是不是数组
export const isInteger = (key) => '' + parseInt(key, 10) === key; // 是不是数组

const hasOwnProperty = Object.prototype.hasOwnProperty;
export const hasOwn = (val, key) => hasOwnProperty.call(val, key); //
export const hasChanged = (value, oldValue) => value != oldValue; // 两个值是否相等
export const isString = (val) => typeof val == "string"; // 是不是字符串
export const isFunction = (val) => typeof val == "function"; // 是不是函数（方法）