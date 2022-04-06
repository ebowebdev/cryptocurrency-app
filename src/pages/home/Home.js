import React, { useState, useEffect } from 'react'
import { useSelector } from 'react-redux'
import Navbar from '../../components/navbar/Navbar'
import TotalMarket from '../../components/totalMarket/TotalMarket'
import BestCryptos from '../../components/bestCryptos/BestCryptos'
import NewCryptos from '../../components/newCryptos/NewCryptos'
import './home.css'

const Home = () => {
  const [stats, setStats] = useState([])
  const [isLoading, setIsLoading] = useState([])
  const data = useSelector((state) => state?.cryptos?.data);
  console.log({data})

  useEffect(()=>{
    setStats(data?.stats)
    setIsLoading(data?.isLoading)
  },[data])

  return (
    <div>
      {isLoading ? 
      <div>
        <h1>Loadding ...</h1>
      </div> : 
      <div>
        <Navbar/>
        <BestCryptos stats={stats}/>
        <NewCryptos stats={stats}/>
        <TotalMarket stats={stats}/>
      </div> 
    }
    </div>
  )
}

export default Home