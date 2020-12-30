const path = require("path")
const HtmlWebpackPlugin = require("html-webpack-plugin")

const htmlPlugin = new HtmlWebpackPlugin({
    template: path.join(__dirname, "./src/index.html"), // 源文件
    filename: "index.html", // 生成的内存中首页的名称
  });

module.exports = {
    mode: "development",
    plugins: [htmlPlugin],
    module: { // 所有第三方 模块的配置规则
        rules: [ // 第三方匹配规则
            { test: /\.js|jsx$/, use: "babel-loader", exclude: /node_modules/ },
        ]
    },
    resolve: { // 配置后缀名过滤
        extensions: ['.js', '.jsx', '.json'], // 表示这几个文件的后缀名可以不写]
        alias: {
            '@': path.join(__dirname, "./src") // 在这个项目中， @ 表达项目根目录中 src 的这一层路径
        }
    }
}