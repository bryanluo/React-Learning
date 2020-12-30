import React from "react";
import ReactDOM from "react-dom";


// 组件：第一种创建方式
function Hello(props){
    // 在组件中，必须返回一个合法的 JSX 虚拟的 DOM 元素
    console.log(props)
    return <div>这是一个 Hello 组件, --- {props.name} --- {props.age} --- {props.gender}</div>
}

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
