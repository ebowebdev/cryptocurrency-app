import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import Header from "../../components/header/Header";
import HeaderImg from "../../components/headerImg/HeaderImg";
import News from "../../components/news/News";
import Loading from "../../components/loading/Loading";
import "./home.css";

const Home = ({ darke }) => {
  const [stats, setStats] = useState([]);
  const [news, setNews] = useState({});
  const cryptosData = useSelector((state) => state?.cryptos?.data);
  const { isLoading } = useSelector((state) => state?.cryptos);
  const newsData = useSelector((state) => state?.news?.data);
  const { newsLoading } = useSelector((state) => state?.news);

  useEffect(() => {
    setStats(cryptosData?.stats);
  }, [cryptosData]);

  useEffect(() => {
    setNews(newsData?.value);
  }, [newsData]);

  return (
    <div>
      {!isLoading && cryptosData ? (
        <div>
          <HeaderImg darke={darke}/>
          {stats && <Header stats={stats} />}
          {!newsLoading && newsData ? (
            <News news={news} />
          ) : (
            <Loading/>
          )}
        </div>
      ) : (
        <Loading/>
      )}
    </div>
  );
};

export default Home;
