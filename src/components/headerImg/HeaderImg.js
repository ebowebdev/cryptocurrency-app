import React, {memo} from 'react'
import './headerImg.css'

const HeaderImg = ({ darke }) => {
  return (
    <div className="header-img-container">
      <div className="header-text-box">
        <div className="header-text">
          look out of the box for your opportunity
        </div>
      </div>
      <div className="header-img">
        <img src={darke ? "bitcoin1.jpg" : "images.jpg"} alt="cryptos" />
      </div>
    </div>
  )
}

export default memo(HeaderImg)