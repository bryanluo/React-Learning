/**
 *
 *  将组件全部抽离到该文件中
 *
 */
import React from 'react'

// 引入css 文件
import style from  "@/css/CmtItem.css";

export const CmtItem = (item) => {
  return (
    <div className={style.item}>
      <h1 className={style.user}>评论人: {item.user}</h1>
      <p className={style.content}>评论内容: {item.content}</p>
    </div>
  );
}