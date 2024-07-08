import React from 'react'
import BannerImage from '../Image/outbath.jpg'
import logo from '../Image/logo_name.png'
import Searching from '../../../component/layout/Searching'

function Banner() {
  return (
    <div>
      <img src={logo} alt='홈_로고' style={{ height: '75px', marginTop: '25px' }} />
      <span style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
      }}>
        <Searching style={{ width: '50%', marginTop: '-50px' }} />
      </span>
      <div style={{
        backgroundImage: `url(${BannerImage})`,
        backgroundColor: '#9FFFD5',
        width: '100%',
        height: '350px',
        backgroundSize: 'cover',
        backgroundPosition: 'center center',
        position: 'relative',
        textAlign: 'center',
        marginTop: '40px',
        alignContent: 'center',
        color: '#44CAFA',

      }}>
        <h1 style={{ fontSize: '35px', fontWeight: 'bolder' }}>
          건의 사항 게시판
        </h1>
        <span style={{ fontSize: '25px', fontWeight: 'bold' }}>
          손님들의 의견은 언제나 경청하겠습니다.
        </span>
      </div>
      <hr style={{ border: '3px solid black' }} />
    </div>
  )
}

export default Banner