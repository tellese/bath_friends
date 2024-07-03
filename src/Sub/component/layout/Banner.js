import React from 'react'
import BannerImage from '../Image/outbath.jpg'

function Banner() {
  return (
    <div>
      <div style={{
      backgroundImage: `url(${BannerImage})`,
      backgroundColor: '#9FFFD5',
      width: '100%',
      height: '350px',
      backgroundSize: 'cover',
      backgroundPosition: 'center center',
      position: 'relative',
    }}>
      </div>
      <hr style={{border: '3px solid black'}}/>
    </div>
  )
}

export default Banner