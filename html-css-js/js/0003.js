function eat(...args) {
    console.log("吃饭", args);
}

// 扩展所有函数
Function.prototype.before = function (beforeFn) {
    // 谁调用方法this就指向谁
    return (...args) => { // newFn 获取函数中的所有参数
        beforeFn(); // 扩展函数
        // 箭头函数中没有this， 那么会向上查找
        this(...args)
    }
}

let newFn =eat.before(() => { // before 接受一个函数 作为参数，那么before函数就是一个高阶函数
    console.log("刷牙");
})
// 函数执行的时候产生的执行上下文，代码在定义的时候就确定了作用域！
// 这里真产生了闭包吗 ？ 什么叫闭包 ：开发中的理解：函数定义的作用域和执行的作用域不是同一个就会产生闭包
newFn("火腿肠")

