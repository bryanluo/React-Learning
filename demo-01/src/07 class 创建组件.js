/**
 * 
 * 基于 class 关键字创建组件
 * 
 */
import React,{Component} from "react";
import ReactDOM from "react-dom";

// 基于 class 关键字创建组件
class SayHello extends Component {
  // 在组件内部必须有 reder 函数，render 函数必须返回合法的 JSX 虚拟DOM结构
  // 作用：渲染 DOM 结构
  render() {
    return <div>这是一个 class 创建的组件</div>;
  }
}
ReactDOM.render(<SayHello />, document.getElementById("app"));
