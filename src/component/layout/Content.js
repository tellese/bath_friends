import { Divider, Layout, List, Menu, Typography } from 'antd';
import React from 'react';
import Adver from './Adver';


const { Content, Footer, Sider } = Layout;
const data = [
  'Racing car sprays burning fuel into crowd.',
  'Japanese princess to wed commoner.',
  'Australian walks 100km after outback crash.',
  'Man charged over missing wedding girl.',
  'Los Angeles battles huge wildfires.',
];

const items = ['서울', '경기', '충청', '강원', '경상', '전라', '제주'].map((key, index) => {
  return {
    key: `region${key}`,
    label: `${key}`,
    children: new Array(3).fill(null).map((_, j) => {

      const subKey = index * 4 + j + 1;

      return {
        key: subKey,
        label: `option${subKey}`,
      };
    }),
  };
});

const Contents = () => {
  return (
    <Layout>
      <Content
        style={{
          padding: '0 100px',
        }}
      >
        <Layout
          style={{
            padding: '24px 0',
            background: '#BBC1CA',
            borderRadius: '7px',
            marginTop: '25px'
          }}
        >
          <Sider
            style={{
              background: '#6699CC',
            }}
            width={200}
          >
            <Menu
              mode="vertical"
              style={{
                height: '100%',
              }}
              items={items}
            />
          </Sider>
          <Content
            style={{
              padding: '0 24px',
              minHeight: 280,
            }}
          >
            <div style={{ fontWeight: 'bold', fontSize: '30px' }}>
              여행 상품
            </div>
            <Divider style={{ border: '1px solid black' }} />
            <div style={{ marginBottom: '25px' }}>
              <Adver />
            </div>
            <Divider style={{ border: '1px solid black' }} />
            <List
              header={<div style={{
                fontSize: '25px',
                textAlign: 'center',
                fontWeight: 'bold'
              }}>
                공지 사항 게시판
              </div>}
              bordered
              style={{ border: 'black solid 3px' }}
              dataSource={data}
              renderItem={(item, index) => (
                <List.Item style={{
                  borderBottom: index === data.length - 1 ? 'none' : '2px solid black',
                  fontWeight: 'bold',
                }}>
                  <Typography.Text>[긴급]</Typography.Text> {item}
                </List.Item>
              )}
            />
          </Content>
        </Layout>
      </Content>
      <Footer>
      </Footer>
    </Layout>
  );
};
export default Contents;