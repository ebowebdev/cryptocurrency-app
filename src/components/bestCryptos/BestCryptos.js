import React from 'react'
import CryptoBasicInfo from '../../components/cryptoBasicInfo/CryptoBasicInfo'

const BestCryptos = ({stats}) => {

  return (
    <div>
      <div className="text-center">
        <h3>The best Cryptocurrencies</h3>
      </div>
      <div className="flex-box-row sb">
        {stats?.bestCoins?.map(bestCoin => <CryptoBasicInfo bestCoin={bestCoin} key={bestCoin.uuid}/>)}
      </div>
    </div>
  )
}

export default BestCryptos