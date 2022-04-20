import axios from "axios";

const NEWS_URL = process.env.REACT_APP_URL_NEWS;
const HOST_NEWS_API = process.env.REACT_APP_HOST_NEWS_API;
const KEY_API = process.env.REACT_APP_KEY_API_NEWS;

const fetchSearchNews = async (category = "cryptocurrency") => {
  try {
    const options = {
      method: "GET",
      url: `${NEWS_URL}?q=${category}`,
      params: { freshness: "Day", textFormat: "Raw", safeSearch: "Off" },
      headers: {
        "X-BingApis-SDK": "true",
        "X-RapidAPI-Host": HOST_NEWS_API,
        "X-RapidAPI-Key": KEY_API,
      },
    };

    const res = await axios.request(options);
    return res.data;
  } catch (error) {
    return error.message;
  }
};

export { fetchSearchNews };
