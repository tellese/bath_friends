import { Divider, Layout, List, Menu } from 'antd';
import React from 'react';

const { Header, Content, Sider } = Layout;

const data = [
  '코로나때 닫혔던 찜질방을 다시 열어주세요',
  '청소시간을 조금 줄여줬으면 좋겠어요',
  '아침에 목욕탕에 들어가면 이상한게 보입니다',
  '남탕쪽 매점에 먹거리가 부족해 보입니다.',
  '여자는 수건을 더 줬으면 좋겠어요.',
];

const data2 = [
  '매점에 파는 음식이 다양했으면 좋겠어요!',
  '탕이 너무 뜨겁거나 너무 차가워요',
  '세신사 분들이 너무 불친절 합니다',
  '어린아이 통제가 제대로 안돼요.',
  '찜질방에 코고는 사람에 대한 대책이 필요합니다.',
]

const items = ['서울', '경기', '충청', '강원', '경상', '전라', '제주'].map((index) => ({
  key: String(index),
  label: `${index} 지역 건의`,
}));

function Contents() {
  return (
    <Layout>
      <Sider style={{ backgroundColor: '#65B7ED', borderRadius: '10px' }}>
        <div style={{
          alignItems: 'center',
          justifyContent: 'center',
        }}>
          <Menu theme="dark" mode="inline" items={items}
            style={{
              backgroundColor: '#018294',
              borderRadius: '9px'
            }} />
        </div>
      </Sider>
      <Layout>
        <Header
          style={{
            backgroundColor: '#8DC7ED',
            height: '350px',
            margin: '10px 20px',
            borderRadius: '10px'
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
              background: '#B2EAED',
              borderRadius: '10px',
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
              dataSource={data2}
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