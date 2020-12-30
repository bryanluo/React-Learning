import React from "react";
import ReactDOM from "react-dom";

const title = "我是一个常量";
let name = "我是一个变量";

const DIV = () => {
  return <div>hello world !</div>;
};

// 组件嵌套
const WrapperDiv = (props) => {
    console.log(props.children);
    const Wrapper = (props) => {
      return <div style={{ backgroundColor: "red" }}>{props.children}</div>;
    };
    if (props.hasPermission) {
      return <Wrapper>{props.children}</Wrapper>;
    }
    return null;
  };

// 数组数据渲染
const arrStr = ["开发", "运维", "测试", "市场", "销售"]
const LIST = () => {
    return <div>{arrStr.map(item =>  <h3 key={item}>{item}</h3>)}</div>
}


// 渲染
ReactDOM.render(<LIST />,
  document.getElementById("app")
);
