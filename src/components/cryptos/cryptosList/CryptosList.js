import React, { useEffect, useState, memo} from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { fetchDataAction } from '../../../redux/actions'
import './cryptoList.css'

const CryptosList = () => {
  const [cryptos, setCryptos] = useState([])
  const [limit, setLimit] = useState(25)
  const data = useSelector(state => state?.cryptos?.data)
  const dispatch = useDispatch()
  const navigate = useNavigate()

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
    <div className="cryptos-container">
      <div className="title">
        <h5>the best 100 coins</h5>
      </div>
      <div className="cryptos-list-container">
        {cryptos?.map(crypto => 
        <div 
        onClick={()=>navigate(`cryptocurrencies/${crypto?.uuid}`)} 
        className="cryptos-list-box"
        key={crypto.uuid}
        >
          <img src={crypto?.iconUrl} alt="crypto"  className="cryptos-list-img"/>
          <p className="cryptos-list-name">{crypto?.name}</p>
        </div>)}
        <div className="show-more-scptos">
          <button onClick={fetchMoreCryptos}>show more</button>
        </div>
      </div>
    </div>
  )
}

export default memo(CryptosList)