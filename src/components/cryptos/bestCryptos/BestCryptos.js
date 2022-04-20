import React,{ memo } from 'react'
import CryptoBasicInfo from '../../crypto/cryptoBasicInfo/CryptoBasicInfo'
import './bestCryptos.css'

const BestCryptos = ({data, title}) => {
  return (
    <div className="best-cryptos-container">
      <div className="best-cryptos-title">
        <h3>{title}</h3>
      </div>
      <div className="best-cryptos-box">
        {data?.map(bestCoin => <CryptoBasicInfo bestCoin={bestCoin} key={bestCoin.uuid}/>)}
      </div>
    </div>
  )
}

export default memo(BestCryptos)