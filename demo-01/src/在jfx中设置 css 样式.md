### 在 JFX 中设置 CSS 样式

> 注意：在 JFX 中， 如果想写行内样式，不能为 style 设置字符串的值，而是应该这么写: <h1 style={{ color:red, font-size: 16px }}>在 JFX 中设置行内样式</h1>

> 错误展示: <h1 style="color: red">错误展示</h1>

> 在行内样式中， 如果是数值类型的样式，则可以不用引号包裹， 如果是字符串类型的样式值， 必须使用引号包裹

### 在 JFX 中引入 css 文件

安装样式引入命令:

> cnpm i style-loader css-loader -D

webpack 插件配置:

```
module.exports = {
    mode: "development",
    module: { // 所有第三方 模块的配置规则
        rules: [ // 第三方匹配规则
            { test: /\.css$/, use: ["style-loader", "css-loader"]} // 打包处理 CSS 样式表的第三方 loader
        ]
    },
    resolve: { // 配置后缀名过滤
        extensions: ['.js', '.jsx', '.json'], // 表示这几个文件的后缀名可以不写]
        alias: {
            '@': path.join(__dirname, "./src") // 在这个项目中， @ 表达项目根目录中 src 的这一层路径
        }
    }
}
```