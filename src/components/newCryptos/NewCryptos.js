import React from 'react'
import CryptoBasicInfo from '../../components/cryptoBasicInfo/CryptoBasicInfo'

const NewCryptos = ({stats}) => {

  return (
    <div>
      <div>
        <h3>The best New Cryptocurrencies</h3>
      </div>
      <div className="flex-box-row sb">
        {stats?.newestCoins?.map(bestCoin => <CryptoBasicInfo bestCoin={bestCoin}/>)}
      </div>
    </div>
  )
}

export default NewCryptos