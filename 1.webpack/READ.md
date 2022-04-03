#### 1.webpack准备工作

##### 1.1 webpack安装 

````json
npm i webpack webpack-cil -G //全局安装
npm i webpack webpack-cil -D //局部安装
//正常在终端执行webpack 命令 会执行全局webpack命令
````

##### 1.2局部安装webpack

````json
npm i webpack webpack-cil -D //局部安装
npm init -y
````

##### 1.3 当执行npm run build 时候

````json
//当执行npm run build时， 会在当前文件 查询src/index.js这个入口文件
````

##### 1.4  **指定webpack配置文件**  

````json
//新建webpack.config.js文件 ，指定入口文件 出口文件；
//因为webpack.config.js是在node环境下启动，所以采用common.js语法
````

````js
//指定文件入口出口
const path = require("path")
module.exports = {
  entry: "./src/index.js",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "build.js"
  }
}
````

