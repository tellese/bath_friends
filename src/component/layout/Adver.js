import React from 'react';
import { Card, Col, Row } from 'antd';
import { Link } from 'react-router-dom';
import { america, france, greece, japan1, jeju, singapol, switzerland, venezia, mongol, england, india, german } from '../Ad_Image'

const imgs = [
  { src: america, alt: '미국', title: '미국 여행', descriptions: '색다른 곳으로 여행을 가요' },
  { src: france, alt: '프랑스', title: '프랑스 여행', descriptions: '가장 아름다운 곳으로 여행' },
  { src: greece, alt: '그리스', title: '그리스 여행', descriptions: '고대로 떠나가는 여행' },
  { src: japan1, alt: '일본', title: '일본 여행', descriptions: '가깝지만 색다른 맛의 여행' },
  { src: jeju, alt: '제주', title: '제주 여행', descriptions: '우리나라에서 가장 정다운 곳으로' },
  { src: singapol, alt: '싱가폴', title: '싱가폴 여행', descriptions: '바다의 풍경이 제일 아름다운 여행지' },
  { src: switzerland, alt: '스위스', title: '스위스 여행', descriptions: '상쾌하고 시원한 곳, 피요르드로' },
  { src: venezia, alt: '베네치아', title: '베네치아 여행', descriptions: '물의 도시로 향해 배를 타고' },
  { src: mongol, alt: '몽골', title: '몽골 여행', description: '떠나요, 드넓은 초원과 하늘 아래로' },
  { src: england, alt: '영국', title: '영국 여행', description: '신사와 부인들의 나라로 향합니다' },
  { src: india, alt: '인도', title: '인도 여행', description: '어느 나라에서도 볼 수 없는 신비로' },
  { src: german, alt: '독일', title: '독일 여행', description: '고성들이 가득한 그곳으로 떠나요' },
];

const { Meta } = Card;

const Adver = () => (
  <Row gutter={[16, 16]}>
    {imgs.map((img, index) =>
      <Col key={index} lg={4} md={6} sm={12} xs={24}>
        <Link>
          <Card
            hoverable
            style={{
              width: '120px',
            }}
            cover={<img alt={`${img.alt}`} src={img.src} style={{ height: '100px' }} />}
          >
            <Meta title={img.alt}/>
          </Card>
        </Link>
      </Col>
    )}
  </Row>
);
export default Adver;