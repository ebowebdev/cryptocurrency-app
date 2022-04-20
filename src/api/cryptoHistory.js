import axios from 'axios'

const URL_COIN = process.env.REACT_APP_URL_COIN
const HOST_CRYPTO_API = process.env.REACT_APP_HOST_CRYPTO_API
const KEY_API = process.env.REACT_APP_KEY_API

const fetchCryptoHistory = async ({uuid, time}) => {
  console.log({time})

  const options = {
    method: 'GET',
    url: `${URL_COIN}/${uuid}/history`,
    params: {timePeriod: time},
    headers: {
      'X-RapidAPI-Host': HOST_CRYPTO_API,
      'X-RapidAPI-Key': KEY_API
    }
  };

  try {
    const res = await axios.request(options)
    console.log({data:res.data})
    return res.data
  }catch(err){
    return err.message
  }
}

export { fetchCryptoHistory }