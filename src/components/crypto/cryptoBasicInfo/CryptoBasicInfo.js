import React, {memo} from 'react'
import './cryptoBasecInfo.css'

const CryptoBasicInfo = ({bestCoin}) => {
  return (
    <div className="flex-box-column best-coin-container">
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

export default memo(CryptoBasicInfo)