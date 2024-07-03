import React from 'react';
import { Layout, Menu } from 'antd';

const {Header} = Layout;

const menus = ['리뷰 게시판','건의 게시판','이용권 구매','검색','공지 사항'].map((key)=>({

  key,
  label: `${key}`,
  
  key,
  label: `${key}`,
  
  key,
  label: `${key}`,
  
  key,
  label: `${key}`,
  
  key,
  label: `${key}`
}))

const NavBar = () => {
  return (
    <Layout>
      <Header
        style={{
          display: 'flex',
          justifyContent: 'center',
        }}
      >
        <div/>
        <Menu
          theme="dark"
          mode="horizontal"
          items={menus}
          style={{
            flex: 1,
            minWidth: 0,
            justifyContent: 'center',
          }}
        />
      </Header>
    </Layout>
  )
}

export default NavBar