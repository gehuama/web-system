## 常用loader
    ### loader：加载器 webpack中将一切文件视为模块,但webpack只能解析js文件,因此其他文件的解析就需要用到loader。
    ### loader作用：让webpack拥有加载和解析非js文件的能力
    ### babel-loader：把 ES6 转换成 ES5
    ### css-loader：加载 CSS，支持模块化、压缩、文件导入等特性
    ### style-loader：把 CSS 代码注入到 JavaScript 中，通过 DOM 操作去加载 CSS。
    ### file-loader 把文件输出到一个文件夹中，在代码中通过相对 URL 去引用输出的文件
    ### url-loader 和 file-loader 类似，但是能在文件很小的情况下以 base64 的方式把文件内容注入到代码中去
    ### vue-loader 
## 常用plugin
    ### plugin：插件 Plugin可以扩展webpack的功能，让webpack具有更多的灵活性。 在 Webpack 运行的生命周期中会广播出许多事件，Plugin 可以监听这些事件，在合适的时机通过 Webpack 提供的 API 改变输出结果。
    ### html-webpack-plugin 为html文件中引入的外部资源，可以生成创建html入口文件
## 打包格式
    

## windows 电脑 node_modules 删除不了问题
    1. 方法一：命令 rm -rf node_modules
    2. 方法二：采用压缩工具 例如好压 选择压缩后删除 再把压缩后的压缩文件删除