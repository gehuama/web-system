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