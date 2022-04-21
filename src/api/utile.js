export const filterCryptosByInput = (e, cryptos, setCryptosFilted) => {
  const newCryptos = [...cryptos?.filter(crypto => crypto?.name.toLowerCase().includes((e.target.value).toLowerCase()) && crypto )]
  setCryptosFilted(newCryptos)
}

export const filterCryptosByAlfa = (cryptos, setCryptosFilted) => {
  const alfaCryptos = [...cryptos?.sort((a,b) => (a?.name.toLowerCase() >  b?.name.toLowerCase()) ? 1 : -1)]
  setCryptosFilted(alfaCryptos)
}

export const filterCryptosByVolume = (cryptos, setCryptosFilted) => {
  const volumeCryptos =[...cryptos?.sort((a,b) => (a?.["24hVolume"] >  b?.["24hVolume"]) ? 1 : -1)]
  setCryptosFilted(volumeCryptos)
}

export const filterCryptosByChange = (cryptos, setCryptosFilted) => {
  const changeCryptos =[...cryptos?.sort((a,b) => (a?.change <  b?.change) ? 1 : -1)]
  setCryptosFilted(changeCryptos)
}

export const filterCryptosByMarketCap = (cryptos, setCryptosFilted) => {
  const marketCapCryptos = [...cryptos?.sort((a,b) => (+a?.marketCap < +b?.marketCap) ? 1 : -1)]
  setCryptosFilted(marketCapCryptos)
}

export const filterCryptosByPriceDown = (cryptos, setCryptosFilted) => {
  const priceCryptosDown =[...cryptos?.sort((a,b) => (+a?.price > +b?.price) ? 1 : -1)]
  setCryptosFilted(priceCryptosDown)
}

export const filterCryptosByPriceUp = (cryptos, setCryptosFilted) => {
  const priceCryptosUp =[...cryptos?.sort((a,b) => (+a?.price < +b?.price) ? 1 : -1)]
  setCryptosFilted(priceCryptosUp)
}
