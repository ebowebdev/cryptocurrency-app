import React from 'react'
import './cryptoBasecInfo.css'

const CryptoBasicInfo = ({bestCoin}) => {
  return (
    <div className="flex-box-column">
      <div className="img-box" >
        <img className="img" src={bestCoin?.iconUrl} alt="coin info" />
      </div>
      <div>
        <p>{bestCoin?.name}</p>
        <p>{bestCoin?.symbol}</p>
      </div>
    </div>
  )
}

export default CryptoBasicInfo