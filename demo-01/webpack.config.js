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
            { test: /\.css$/, use: ["style-loader", "css-loader?modules"]}, // 打包处理 CSS 样式表的第三方 loader, css-loader?modules 追加 modules 参数， 表示为 普通的 css 样式表，启用模块化
        ]
    },
    resolve: { // 配置后缀名过滤
        extensions: ['.js', '.jsx', '.json'], // 表示这几个文件的后缀名可以不写]
        alias: {
            '@': path.join(__dirname, "./src") // 在这个项目中， @ 表达项目根目录中 src 的这一层路径
        }
    }
}