const axios = require("axios");

const COIN_URL = process.env.REACT_APP_URL_COIN
const HOST_CRYPTO_API = process.env.REACT_APP_HOST_CRYPTO_API
const KEY_API = process.env.REACT_APP_KEY_API

const fetchCrypto = async (id) => {
  const options = {
    method: "GET",
    url: `${COIN_URL}/${id}`,
    params: { timePeriod: "24h" },
    headers: {
      'X-RapidAPI-Host': HOST_CRYPTO_API,
      'X-RapidAPI-Key': KEY_API
    },
  };

  try {
    const res = await axios.request(options);
    return res.data;
  } catch (err) {
    return err.message;
  }
};

export { fetchCrypto }
