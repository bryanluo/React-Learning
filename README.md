# React 学习

## 创建基本的 webpack4.x 项目

***1、创建项目包***
> mkdir demo-01

***2、快速初始化应用***
> cd demo-01 && npm init -y 

***3、在项目根目录创建 src 和 dist 产品目录，并在 src 目录下创建 index.html***
> mkdir src dist

***4、 使用 cnpm 安装 webpack， 运行  cnpm i webpack webpack-cli -D***
> npm install -g cnpm --regitry=https://registry.npm.taobao.org

> cnpm i webpack webpack-cli -D

***5、注意： webpack 4.x 提供了约定大于配置的概念； 目的是为了尽量减少配置文件的体积***

> 默认约定了： 打包的入口是 src -> index.js

> 默认输出的文件: dist -> main.js

> 4.x 新增了 mode 选项， 可选值为 development、production

***6、安装 webpack-dev-server 出现问题***

问题:

Error: Cannot find module 'webpack-cli/bin/config-yargs'

原因:

 webpack-cli 和 webpack-dev-server 的版本不兼容

 解决办法:

 卸载局部和全局的 webpack-cli  和 webpack-dev-serve 并安装兼容版本, 卸载和安装命令如下：

```bash
webpack-cli 卸载：
sudo cnpm uninstall webpack-cli -D (局部)

sudo cnpm uninstall webpack-cli (全局)

webpack-cli 安装:
sudo cnpm i webpack-cli@3 -g (全局, 版本为 3.X )

webpack-dev-server 卸载:
sudo cnpm uninstall webpack-dev-server -D 

webpack-dev-server 安装:
sudo cnpm i webpack-dev-server@3  -D (局部，版本为 3.X)
```

参数解释： -D（局部）、-g（全局)

***7、安装 html-webpack-plugin***

> cnpm i html-webpack-plugin -D 

作用:

配置首页跳转路径的插件