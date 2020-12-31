/**
 * 
 *  评论页面编写案例
 * 
 */
import React,{Component} from "react";
import ReactDOM from "react-dom";

// 使用 function 构造函数，定义普通的无状态组件
const CmtItem = (item) => {
return <div>
    <h1>评论人: {item.user}</h1>
    <p>评论内容: {item.content}</p>
</div>
}


// 使用 class 关键字，定义父组件
class CmtList extends Component{
    constructor(){
        super()
        this.state = {
            list : [
                {id: 1, user: "zhangsan", content:"haha"},
                {id: 2, user: "lisi", content:"wocao"},
                {id: 3, user: "wangwu", content:"你瞅啥"},
                {id: 4, user: "zhaoliu", content:"仇尼扎的"},
                {id: 5, user: "tianqi", content:"瞅你咋地"}
            ]
        }
    }
    render(){
        return <div>
            <h1>这是评论列表组件</h1>
            {this.state.list.map(item => <CmtItem key={item.id} {...item}></CmtItem>)}
        </div>
    }
}

ReactDOM.render(<CmtList></CmtList>, document.getElementById("app"));
