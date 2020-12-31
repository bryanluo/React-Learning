/**
 * 
 * 
 *  使用行内样式
 * 
 */
import React from 'react'
import {CmtItem2} from "@/components/CmtItem2";

export default class CmtList2 extends React.Component{
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
            <h1 style={{ color: 'red', fontSize: '35px', zIndex: 3, fontWeight: 200, textAlign: 'center' }}>这是评论列表组件</h1>
            {this.state.list.map(item => <CmtItem2 key={item.id} {...item}></CmtItem>)}
        </div>
    }
}