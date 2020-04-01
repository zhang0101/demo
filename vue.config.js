const path = require("path");

function resolve(dir) {
  return path.join(__dirname, dir);
}

module.exports = {
  lintOnSave: false, //是否使用 eslint 语法检查
  publicPath: "./",
  // publicPath: process.env.NODE_ENV === 'production' ? '/' : '/',
  filenameHashing: true,
  // 是否使用包含运行时编译器的Vue核心的构建
  runtimeCompiler: false,
  // 默认情况下 babel-loader 忽略其中的所有文件 node_modules
  transpileDependencies: [],
  // 生产环境 sourceMap
  productionSourceMap: false,
  devServer: {
    open: true, //是否自动打开浏览器
    port: 1234 //设置端口号
    // https: true,//是否使用HTTPS协议
    // host:ipAddress//ID地址，
    /*proxy: {//代理设置
    }*/
  },
  chainWebpack: config => {
    //配置别名
    config.resolve.alias
      .set("@", resolve("src"))
      .set("assets", resolve("src/assets"))
      .set("_c", resolve("src/components"))
      .set("router", resolve("src/router"))
      .set("store", resolve("src/store"))
      .set("views", resolve("src/views"))
      .set("mock", resolve("src/mock"))
      .set("api", resolve("src/api"));
  }
};
