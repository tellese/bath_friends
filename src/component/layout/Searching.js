import { Input } from 'antd'
import React from 'react'

const Searching = ({style}) => {
  return (
    <div style={style}>
      <Input.Search
      placeholder='검색어를 입력하세요'
      enterButton='검색하기'
      size='large'
      />
    </div>
  )
}

export default Searching