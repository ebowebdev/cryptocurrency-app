import React, { useEffect, useState, useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams, useNavigate } from "react-router-dom";
import { fetchDataAction } from "../../redux/actions";
import Card from "../../components/crypto/card/Card";
import Loading from "../../components/loading/Loading";
import {
  filterCryptosByAlfa,
  filterCryptosByChange,
  filterCryptosByInput,
  filterCryptosByMarketCap,
  filterCryptosByPriceDown,
  filterCryptosByPriceUp,
  filterCryptosByVolume,
} from "../../api/utile";

import "./cryptoCurrency.css";

const CryptoCurrency = () => {
  const data = useSelector((state) => state?.cryptos?.data);
  const { isLoading } = useSelector((state) => state?.cryptos);
  const [cryptos, setCryptos] = useState([]);
  const [limit, setLimit] = useState(25);
  const [btn, setBtn] = useState("");
  const [cryptosFilted, setCryptosFilted] = useState([]);
  const inputRef = useRef("");
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { filterBy } = useParams();

  useEffect(() => {
    setCryptos(data?.coins);
  }, [data]);

  useEffect(() => {
    setBtn(filterBy);
    if (cryptos) {
      filterBy === "A-Z" && filterCryptosByAlfa(cryptos, setCryptosFilted);
      filterBy === "volume" && filterCryptosByVolume(cryptos, setCryptosFilted);
      filterBy === "changeEn24" &&
        filterCryptosByChange(cryptos, setCryptosFilted);
      filterBy === "marketCap" &&
        filterCryptosByMarketCap(cryptos, setCryptosFilted);
      filterBy === "priceDown" &&
        filterCryptosByPriceDown(cryptos, setCryptosFilted);
      filterBy === "priceUp" &&
        filterCryptosByPriceUp(cryptos, setCryptosFilted);
      filterBy === undefined &&
        filterCryptosByMarketCap(cryptos, setCryptosFilted);
    }
  }, [filterBy, cryptos]);

  useEffect(() => {
    setCryptosFilted(cryptos);
  }, [cryptos]);

  useEffect(() => {
    if(window.innerWidth > 600){
      inputRef.current.focus()
    }
  }, [])

  const fetchMoreCryptos = () => {
    if (limit < 100) {
      dispatch(fetchDataAction(limit + 25));
      setLimit((preValue) => preValue + 25);
    } else {
      dispatch(fetchDataAction(25));
      setLimit(25);
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  return (
    <div className="crypto-currency-container">
      <div className="search-box">
        <input
          ref={inputRef}
          type="text"
          className="input-search"
          placeholder="search your cryptocurrency"
          onChange={(e) => filterCryptosByInput(e,cryptos, setCryptosFilted)}
        />
        <button
          className={btn === "A-Z" ? "active" : undefined}
          onClick={() => navigate("/cryptocurrency/filterBy/A-Z")}
        >
          A-Z
        </button>
        <button
          className={btn === "volume" ? "active" : undefined}
          onClick={() => navigate("/cryptocurrency/filterBy/volume")}
        >
          volume en 24h
        </button>
        <button
          className={btn === "changeEn24" ? "active" : undefined}
          onClick={() => navigate("/cryptocurrency/filterBy/changeEn24")}
        >
          change en 24h
        </button>
        <button
          className={(btn === "marketCap" || btn === undefined) ? "active" : undefined}
          onClick={() => navigate("/cryptocurrency/filterBy/marketCap")}
        >
          marketCap
        </button>
        <button
          className={btn === "priceUp" ? "active" : undefined}
          onClick={() => navigate("/cryptocurrency/filterBy/priceUp")}
        >
          price up
        </button>
        <button
          className={btn === "priceDown" ? "active" : undefined}
          onClick={() => navigate("/cryptocurrency/filterBy/priceDown")}
        >
          price down
        </button>
      </div>
      {!isLoading && cryptosFilted ? (
          <div className="crypto-currency-list">
            {cryptosFilted?.map((crypto) => (
              <Card crypto={crypto} key={crypto.uuid} />
            ))}
          </div>
      ) : (
        <Loading />
      )}
      <div className="button-box">
        {limit >= 100 ? (
          <>
            <button className="btn-page" onClick={fetchMoreCryptos}>
              return
            </button>
            <p>it's the maximum cryptocurrency</p>
          </>
        ) : (
          <button className="btn-page" onClick={fetchMoreCryptos}>
            More Cryptocurrency
          </button>
        )}
      </div>
    </div>
  );
};

export default CryptoCurrency;
