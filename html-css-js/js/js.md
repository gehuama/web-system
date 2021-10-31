# 数据类型
    基本类型 string number boolean symbols undefined null function
    引用类型 object array

    typeof 返回值 string number boolean symbols undefined null function object

    typeof 对数组操作 结果：object   如：00001.js中第3行结果

    typeof 对 undefined null NaN 操作 结果分别为：undefined、object、number 如：00001.js中第4、5、6行结果

    NaN 什么情况可以得到？ Number("a"+1) 如：00001.js中第7行结果

    a=null 或者 a={}时, 执行下面两行代码结果分别是什么？ 
        let {id} = a;
        console.log(id);
        结果分别为：报错、undefined 如：00001.js中第13、17行结果.
    typeof 对 class a{} 操作 结果：function 如 如：00001.js中第20行结果.
    
    常见数据类型判断方法封装 0001.js 23-32行
# 数组
    基本方法 
    遍历方法
       1. forEach() forEach方法用于调用数组的每个元素，并将元素传递给回调函数。数组中每一个值都会有调用函数。array.forEach(function(currentValue, index, arr), thisValue) 如：00002.js 1-12行
          第一个参数为回调函数，是必传的，它有三个参数
            1. currentValue: 必需 表示当前元素
            2. index: 可选 当前元素的索引值
            3. arr: 可选 当前元素所属的数组对象
          第二个参数，用来绑定回调函数内部this变量 注意：这里不能用箭头函数

          注意:
            forEach 方法不会改变原数组，也没有返回值
            forEach无法使用 break，continue 跳出循环，使用 return 时，效果和在 for 循环中使用 continue 一致；
            forEach 方法无法遍历对象，仅适用于数组的遍历。

       2. map()


# 高阶函数
    定义：1. 一个函数的参数是一个函数，我们可以称之为这个函数为高阶函数（函数的参数为函数）
         2. 一个函数返回一个函数，我们可以称之为函数为高阶函数（函数返回函数）

    解释:在开发的过程中我们不希望破坏（更改）原有的函数，要对这个函数进行扩展
         我们希望对函数进行扩展

    使用：再扩展代码的时候 尽量不直接更改原来的函数，采用高级进行包裹，在内部进行扩展

    例子：0003.js 1-20 行

# 柯里化函数 
    定义：1. 让一个函数变的更具体一些（原则上返回的函数只能接受一个参数）多个参数我们也姑且认为是柯里化
         2. 高阶函数中 包含柯里化函数的（柯里化函数就是一个高阶函数）
         3. 偏函数：返回一个函数，函数参数不止一个
    注意：高阶函数可以暂存变量（内部有闭包）
    使用：通用的柯里化函数，就是根据调用的时候传递的参数，和函数的参数 做判断， 如果传递的参数和定义的参数一致，就让函数执行

    例子 防抖、截流、返柯里化

# callback
    1. before方法 对原函数进行扩展
    2. 0004.js中的curry方法 暂存变量
    3. 0005.js中after函数 函数返回函数 会造成函数嵌套
    两种方式 解决异步问题（0005.js）中

# 发布订阅模式
    0006.js
    先绑定 在做事
    on-emit
# 观察者模式
    0007.js
    被观察者接收观察者，被观察着状态发生变化，要通知所有观察者去更新
# Promise
   ### promise 为了解决异步的编程问题 
    1. 异步嵌套问题（异步回调）
    2. 并发操作获取最终的结果（ 同步异步的并发问题）
   ### promise 有三个状态 ：默认状态是等待态   成功态  失败态
   ### 注意 早起IE不支持
   ### promise 理解
    1. promise是一个类 用的时候 就new这个类 
    2. promise中需要传入一个执行器executor， executor默认会立即执行
    3. 如果调用resolve会让状态变成成功态，调用reject会让状态变成失败态
    4. new promise 会产生一个promise实例，promise实例拥有一个then方法 第一个参数是成功的回调，第二个参数是失败的回调
    5. promise的状态一旦发生改变 就不会再发生变化了 
        成功有成功的原因value， 失败有失败的原因reason
    6. 如果 new promise 中发生异常 也会执行失败
```
    let p = new Promise((resolve, reject) => {
        // 里面为空情况 then中回调不执行
        
        // 成功 执行成功回调
        // resolve("success");

        // 失败 执行失败灰度
        // reject("error");

        // 先成功、后失败  执行成功回调
        // resolve("success");
        // reject("error");

        // 先失败、后成功  执行失败回调
        // reject("error");
        // resolve("success");

        // 内部代码异常 执行失败回调 即使强行成功也不会执行
        throw new Error("失败");
        resolve("success");
        
    })
    p.then(value => {
        console.log(value, "成功");
    }, reason => {
        console.log(reason, "失败");
    })
    console.log(1);
```