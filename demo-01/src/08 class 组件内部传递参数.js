/**
 * 
 *   class 组件内部传递参数
 *   
 *   无论是 class 还是 function 创建的组件， 他们的 props 都是只读的
 * 
 */
import React,{Component} from "react";
import ReactDOM from "react-dom";

const user  = {
    name: "test",
    age: 10
}

class SayHello extends Component {
  render() {
    return <div>这是一个 class 创建的组件--- {this.props.name} --- {this.props.age}</div>;
  }
}

ReactDOM.render(<SayHello {...user}/>, document.getElementById("app"));