import React, {useState, useEffect } from 'react'
import { useSelector } from 'react-redux'
import News from '../../components/news/News'
import Loading from "../../components/loading/Loading";
import './news.css'

const NewsPage = () => {
  const [news, setNews] = useState({});
  const newsData = useSelector((state) => state?.news?.data);
  const { newsLoading } = useSelector((state) => state?.news);

  useEffect(() => {
      setNews(newsData?.value);
    }, [newsData]);
  
  return (
    <div>
      {(!newsLoading && news) ? <News news={news}/> : <Loading/>}
    </div>
  )
}

export default NewsPage