import React from "react";
import ReactDOM from "react-dom";

// 组件的第一种创建方式
// 不论是 React 还是 Vue 组件的 props 永远都市只读的； 不能被重新赋值； 
const Hello = (props) => {
    console.log(props)
    return <div>这是一个 Hello 组件, --- {props.name} --- {props.age} --- {props.gender}</div>
}

// 把组件暴露出去
export default Hello