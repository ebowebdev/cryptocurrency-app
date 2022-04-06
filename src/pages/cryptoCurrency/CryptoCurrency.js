import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import { fetchDataAction } from '../../redux/actions'
import Card from '../../components/card/Card'

import './cryptoCurrency.css'

const CryptoCurrency = () => {
  const [cryptos, setCryptos] = useState([])
  const [limit, setLimit] = useState(25)
  const data = useSelector(state => state?.cryptos?.data)
  const dispatch = useDispatch()

  useEffect(()=>{
    setCryptos(data?.coins)
  },[data])

  const fetchMoreCryptos = () => {
    if(limit < 100){
      dispatch(fetchDataAction(limit+25))
      setLimit(preValue => preValue + 25)
    }else {
      dispatch(fetchDataAction(25))
      setLimit(25)
    }
  }

  return (
    <div className="crypto-currency-container">
      <div className="search-box">
        <input type="text" className="input-search" />
      </div>
      <div className="crypto-currency-list">
        { cryptos?.map(crypto => <Card crypto={crypto} key={crypto.uuid}/>)}
      </div>
      <div>
        {limit >= 100 ? 
          (<>
            <button onClick={fetchMoreCryptos}>return</button>
            <p>it's the maximum cryptocurrency</p>
          </>) : 
          <button onClick={fetchMoreCryptos}>More Cryptocurrency</button> }
      </div>
    </div>
  )
}

export default CryptoCurrency