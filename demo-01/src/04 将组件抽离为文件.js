// 默认， 如果不做单独的配置的话， 不能省略 .js
import Hello from "@/components/Hello"
import React from "react"
import ReactDOM from "react-dom"

const dog  = {
    name: "小黑",
    age: 3, 
    gender: "雄"
}

const child = {
    type: "展开运算符",
    ...dog
}

// 渲染
ReactDOM.render(<Hello {...child}></Hello>, document.getElementById("app"));
