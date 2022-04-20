import React, { useEffect, useState, memo} from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { fetchCryptoHistory } from "../../redux/actions";
import CryptoDesc from "../crypto/cryptoDesc/CryptoDesc";
import CryptoLinks from "../crypto/cryptoLinks/CryptoLinks"
import "./chart.css";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const Chart = () => {
  const [time, setTime] = useState("24h");
  const { uuid } = useParams();
  const dispatch = useDispatch();
  const { data: history } = useSelector((state) => state?.cryptoHistory);
  const { data: crypto } = useSelector((state) => state?.crypto);

  const times = ["24h","3h", "7d", "30d", "3m", "1y", "3y", "5y"];
  const labels = [];
  const prices = [];

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
      },
      title: {
        display: true,
        text: `Chart Line of ${crypto?.coin?.name}`,
      },
    },
  };

  let data = {
    labels,
    datasets: [
      {
        label: "chart",
        data: prices,
        borderColor: "#00C6CF",
        backgroundColor: "#010101",
      },
    ],
  };

  useEffect(() => {
    dispatch(fetchCryptoHistory({uuid, time}));
  }, [dispatch, uuid, time]);

  for (let i = 0; i < history?.history?.length; i += 1) {
    labels.push(new Date(history?.history[i]?.timestamp).toLocaleTimeString())
    prices.push(history?.history[i]?.price);
  }

  return (
    <div className="chart-container">
      <div className="chart-line">
        <select defaultValue={time} onChange={(e) => setTime(e.target.value)}>
          {times.map((time) => (
            <option value={time} key={time}>
              {time}
            </option>
          ))}
        </select>
        <div className="chart-box">
          <Line data={data} options={options} />
        </div>
      </div>
      <CryptoDesc name={crypto?.coin?.name} description={crypto?.coin?.description}/>
      <CryptoLinks name={crypto?.coin?.name} links={crypto?.coin?.links}/>
    </div>
  );
};

export default memo(Chart);
