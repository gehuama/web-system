# 实现gulp打包系统
## 1. gulp 基础支持核心API
## 2. 样式编译、脚本编译、图片编译
## 3. 从0搭建代码框架
## 4. CRS商城小程序打包流程思路
## 5. CRS商城小程序打包优化思想
# gulp demo
# [text](https://github.com/gehuama/gulp-dome)

## 安装模块
- gulp webpack
- gulp-cli webpack-cli
- 文件名 gulpfile.js 定死的 和 webpack.config.js 一样都是定死的
    gulpfile文件名不能随意命名
- gulp命令 直接会找gulpfile.js 文件
- gulp --gulpfile 自定义.js 文件名
## gulp核心API
- gulp.src()
  方法用来获取流的
- gulp.dest()
  方法用来向硬盘写入文件