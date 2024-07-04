import { Layout, Menu } from 'antd';
import React from 'react';
import { Link } from 'react-router-dom';

const { Header } = Layout;

const menus = [

  { key: '리뷰 게시판', label: '리뷰 게시판' },
  { key: '건의 게시판', label: <Link to='/suggest'>건의 게시판</Link> },
  { key: '이용권 구매', label: '이용권 구매' },
  { key: '검색', label: '검색' },
  { key: '공지 사항', label: '공지 사항' }
];

const NavBar = () => {
  return (
    <Layout>
      <Header
        style={{
          display: 'flex',
          justifyContent: 'center',
        }}
      >
        <div />
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