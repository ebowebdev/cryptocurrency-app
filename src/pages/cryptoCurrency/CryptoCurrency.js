import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
//import { useDispatch } from 'react-redux'
//import { fetchDataAction } from '../../redux/actions'
import Card from '../../components/card/Card'

import './cryptoCurrency.css'

const CryptoCurrency = () => {
  const [cryptos, setCryptos] = useState([])
  const data = useSelector(state => state?.cryptos?.data)

  useEffect(()=>{
    setCryptos(data?.coins)
  },[data])

  /*
  const [limit, setLimit] = useState(25)
  const dispatch = useDispatch()

  useEffect(()=>{
    setLimit(25)
  },[])

  const changeLimit = () =>{
    setLimit(preValue => preValue + 25)
    console.log({limit})
    dispatch(fetchDataAction(limit))
  }
  */

  return (
    <div className="crypto-currency-container">
      <div className="search-box">
        <input type="text" className="input-search" />
      </div>
      <div className="crypto-currency-list">
        { cryptos?.map(crypto => <Card crypto={crypto} key={crypto.uuid}/>)}
      </div>
      <div>
        <button>More Cryptocurrency</button>
      </div>
    </div>
  )
}

export default CryptoCurrency