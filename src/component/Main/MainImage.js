import React from 'react'
import bamboo_forest from '../Image/bamboo_forest.jpg';
import logo_name from '../Image/logo_name.png'
import Login from '../layout/Login'
import Searching from '../layout/Searching';
import { Link } from 'react-router-dom';

function MainImage() {
  return (
    <div>
      <span style={{
        display: 'inline-flex',
        padding: '0 35px',
      }}>
        <Link to="/">
          <img src={logo_name} alt='메인 로고 이미지' style={{ height: '80px', paddingRight: '25px' }} />
        </Link>
      </span>
      <span style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%'
      }}>
        <Searching style={{ width: '50%', marginTop: '-50px' }} />
      </span>
      <div style={{
        backgroundImage: `url(${bamboo_forest})`,
        backgroundColor: '#9FFFD5',
        width: '100%',
        height: '350px',
        backgroundSize: 'cover',
        backgroundPosition: 'center center',
        position: 'relative',
        alignContent: 'center',
        marginTop: '25px'
      }}>
        <div style={{
          textAlign: 'center',
          color: '#9FFFD5'
        }}>
          <h1>목 욕 친 구</h1>
          <p style={{ fontSize: '20pt' }}>어서오세요 환영합니다</p>
        </div>
        <Login style={{
          position: 'absolute',
          bottom: '20px',
          right: '20px',
          width: '300px',
          backgroundColor: 'rgba(255, 255, 255, 0.85)',
          padding: '20px',
          borderRadius: '10px',
        }}
        />
      </div>
    </div>
  )
}

export default MainImage