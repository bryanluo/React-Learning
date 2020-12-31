/**
 * 
 *   class 创建的组件 - 有状态服务
 *   1. 相当于 Vue 中的 data(){return {} } - state作用： 给组件绑定私有的数据
 *   2. state 上的数据是可读可写的
 * 
 */
import React,{Component} from "react";
import ReactDOM from "react-dom";

// class 组件传值 

const user  = {
    name: "test",
    age: 10
}


// 基于 class 关键字创建组件
class SayHello extends Component {
    
    constructor(){
        // 由于继承了 Component 父类，所以构造器中必须调用 super()
        super()
        // 只有调用了 super() 以后， 才能使用 this 关键字
        this.state = {
            msg: "大家好， 我是 React"
        } 
    }

  // 在组件内部必须有 reder 函数，render 函数必须返回合法的 JSX 虚拟DOM结构
  render() {
      this.state.msg = "state 的数据被我修改鸟"
    return <div>这是一个 class 创建的组件--- {this.props.name} --- {this.props.age} --- {this.state.msg}</div>;
  }
}

ReactDOM.render(<SayHello {...user}/>, document.getElementById("app"));
