import React, {memo} from 'react'
import './cryptoInfo.css'

const CryptoInfo = ({ infos }) => {

  return (
    <div className="crypto-info">
      {infos.map(info => 
      <div className="crypto-info-box">
        <div className="crypto-info-icon">{info?.icon}</div>
        <div>{info?.title}</div>
        <div className="crypto-info-value">{info?.value}</div>
      </div>)}
    </div>
  )
}

export default memo(CryptoInfo)