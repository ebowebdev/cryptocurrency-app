import React, { useState, useEffect } from 'react'
import { useSelector } from 'react-redux'
import Navbar from '../../components/navbar/Navbar'
import TotalMarket from '../../components/totalMarket/TotalMarket'
import BestCryptos from '../../components/bestCryptos/BestCryptos'
import NewCryptos from '../../components/newCryptos/NewCryptos'
import News from '../../components/news/News'
import './home.css'

const Home = () => {
  const [stats, setStats] = useState([])
  const [news, setNews] = useState({})
  const [isLoading, setIsLoading] = useState(false)
  const [newsLoading, setNewsLoading] = useState(false)
  const cryptosData = useSelector((state) => state?.cryptos?.data);
  const newsData = useSelector((state) => state?.news?.data);

  console.log({news})
  
  useEffect(()=>{
    setStats(cryptosData?.stats)
    setIsLoading(cryptosData?.isLoading)
  },[cryptosData])

  useEffect(()=>{
    setNews(newsData?.value)
    setNewsLoading(newsData?.isLoading)
  },[newsData])

  return (
    <div>
      {isLoading ? 
      <div>
        <h1>Loadding ...</h1>
      </div> : 
      <div>
        <Navbar/>
        <TotalMarket stats={stats}/>
        <BestCryptos stats={stats}/>
        <NewCryptos stats={stats}/>
        {newsLoading ? <h1>Loading ...</h1> : <News news={news}/>}
      </div> 
    }
    </div>
  )
}

export default Home