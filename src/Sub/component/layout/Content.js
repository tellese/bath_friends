import { Divider, Layout, List, Menu } from 'antd';
import React from 'react';
import logo from '../Image/logo_name.png'

const { Header, Content, Sider } = Layout;

const data = [
  'Racing car sprays burning fuel into crowd.',
  'Japanese princess to wed commoner.',
  'Australian walks 100km after outback crash.',
  'Man charged over missing wedding girl.',
  'Los Angeles battles huge wildfires.',
];

const items = ['1', '2', '3', '4', '5'].map((index) => ({
  key: String(index),
  label: `nav ${index}`,
}));

function Contents() {
  return (
    <Layout>
      <Sider>
        <div style={{
          alignItems: 'center',
          justifyContent: 'center'
        }}>
          <img src={logo} style={{ height: '85px' }} />
          <Menu theme="dark" mode="inline" items={items}
            style={{
              backgroundColor: '#347691',
            }} />
        </div>
      </Sider>
      <Layout>
        <Header
          style={{
            backgroundColor: '#55779B',
            height: '350px',
            margin: '10px 20px'
          }}
        >
          <div>
            <Divider orientation="left"
              style={{
                fontSize: '25px',
                fontWeight: 'bold',
                borderColor: '#2F2F36'
              }}
            >가장 인기 있는 건의 사항</Divider>
            <List
              size="small"
              bordered
              dataSource={data}
              style={{
                border: '3px solid black'
              }}
              renderItem={(item, index) =>
                <List.Item
                  style={{
                    fontSize: '18px',
                    borderBottom: index === data.length - 1 ? 'none' : '1px solid black',
                  }}>{item}</List.Item>}
            />
          </div>
        </Header>
        <Content
          style={{
            margin: '24px 16px',
          }}
        >
          <div
            style={{
              padding: 24,
              minHeight: 360,
              background: '#DCDCC9',
              borderRadius: '3px',
            }}
          >
            <Divider orientation="left"
              style={{
                fontSize: '20px',
                fontWeight: 'bold',
                borderColor: '#D99529'
              }}>건의 사항 게시판</Divider>
            <List
              size="large"
              bordered
              dataSource={data}
              style={{
                border: '3px solid black'
              }}
              renderItem={(item, index) =>
                <List.Item
                  style={{
                    fontSize: '18px',
                    borderBottom: index === data.length - 1 ? 'none' : '1px solid black',
                  }}>{item}</List.Item>}
            />
          </div>
        </Content>
      </Layout>
    </Layout>
  )
}

export default Contents