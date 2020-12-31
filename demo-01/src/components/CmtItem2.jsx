/**
 *
 *  使用行内样式
 *
 */
import React from 'react'



// 第一次样式封装: 将样式对象 和 UI结构分离

// const itemStyle = {
//   border: '1px dashed #ccc', margin: '10px', padding: '10px', boxShadow: '0 0 10px #ccc'
// }
// const userStyle = {fontSize: '14px'}
// const contentStyle = { fontSize: '12px' }


// 第二次封装: 将所有的样式合并成一个大的对象

// const styles = {
//   item: {
//     border: '1px dashed #ccc', margin: '10px', padding: '10px', boxShadow: '0 0 10px #ccc'
//   },
//   user: {fontSize: '14px'},
//   content: { fontSize: '12px' }
// }

// 第三次封装: 将所有样式抽离到文件中去
import styles  from "@/components/styles";


export const CmtItem2 = (item) => {
  return (
    <div style= {styles.item}>
      <h1 style={styles.user}>评论人: {item.user}</h1>
      <p style= {styles.content}>评论内容: {item.content}</p>
    </div>
  );
}