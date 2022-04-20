import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { FaDollarSign, FaAward, FaMoneyBillAlt } from "react-icons/fa";
import { AiOutlineFundView, 
  AiOutlineExclamationCircle, 
  AiOutlineNumber,
  AiOutlineCheck,
  AiOutlineStop
} from "react-icons/ai";
import millify from "millify";
import { fetchCryptoAction } from "../../redux/actions";
import CryptoInfo from "../../components/crypto/cryptoInfo/CryptoInfo";
import Chart from "../../components/chart/Chart";
import Title from "../../components/title/Title";
import Loading from "../../components/loading/Loading";
import './crypto.css'

const Crypto = () => {
  const [crypto, setCrypto] = useState({});
  const { uuid } = useParams();
  const dispatch = useDispatch();
  const { data, isLoading } = useSelector((state) => state?.crypto);

  const infos = [
    {
      title: "Price to USD",
      icon: <FaDollarSign/> ,
      value: `$ ${crypto?.price && millify(crypto?.price)}`,
    },
    {
      title: "Volume 24h",
      icon: <FaDollarSign/>,
      value: `$ ${crypto?.["24hVolume"] && millify(crypto?.["24hVolume"])}`,
    },
    {
      title: "Market Cap",
      icon: <FaDollarSign/>,
      value: `$ ${crypto?.marketCap && millify(crypto?.marketCap)}`,
    },
    {
      title: "All time high price",
      icon: <FaAward/>,
      value: `$ ${
        crypto?.allTimeHigh?.price && millify(crypto?.allTimeHigh?.price)
      }`,
    },
    {
      title: "Aprroved Supply",
      icon: <AiOutlineFundView/>,
      value: `${crypto?.supply?.confirmed}` ? <AiOutlineCheck/> : <AiOutlineStop/>,
    },
  ];

  const otherInfos = [
    { title: "Rank", icon: <AiOutlineNumber/>, value: `${crypto?.rank}` },
    {
      title: "Number Of Markets",
      icon: <AiOutlineFundView/>,
      value: `${crypto?.numberOfMarkets && millify(crypto?.numberOfMarkets)}`,
    },
    {
      title: "Number OfExchanges",
      icon: <FaMoneyBillAlt/>,
      value: `${
        crypto?.numberOfExchanges && millify(crypto?.numberOfExchanges)
      }`,
    },
    {
      title: "Total Supply",
      icon: <AiOutlineExclamationCircle/>,
      value: `$ ${crypto?.supply?.total && millify(crypto?.supply?.total)}`,
    },
    {
      title: "Circulating Supply",
      icon: <AiOutlineExclamationCircle/>,
      value: `$ ${
        crypto?.supply?.circulating && millify(crypto?.supply?.circulating)
      }`,
    },
  ];

  useEffect(() => {
    dispatch(fetchCryptoAction(uuid));
  }, [dispatch, uuid]);

  useEffect(() => {
    setCrypto(data?.coin);
  }, [data]);

  return (
    <div>
      {!isLoading && crypto ? (
        <div className="crypto-info-container">
          <div className="crypto-info-header">
            <Title title={`${crypto?.name} infos`}/>
            <div className="crypto-info-soutitle">
              <span>*</span><p> An overview showing the most important information of {crypto?.name}</p><span>*</span>
            </div>
          </div>
          <div className="crypto-info-boddy">
            <CryptoInfo infos={infos}/>
            <CryptoInfo infos={otherInfos}/>
          </div>
          <Chart/>
        </div>
      ) : (
        <Loading />
      )}
    </div>
  );
};

export default Crypto;
