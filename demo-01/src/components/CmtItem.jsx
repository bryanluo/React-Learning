/**
 *
 *  将组件全部抽离到该文件中
 *
 */
import React from 'react'

export const CmtItem = (item) => {
  return (
    <div>
      <h1>评论人: {item.user}</h1>
      <p>评论内容: {item.content}</p>
    </div>
  );
}