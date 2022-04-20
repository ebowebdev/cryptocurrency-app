import React, {memo} from "react";
import BestCryptos from '../cryptos/bestCryptos/BestCryptos'
import "./header.css";

const Header = ({ stats }) => {
  stats && (
    <div className="header-best-cryptos">
      <BestCryptos
        data={stats?.bestCoins}
        title="the best cryptocurrencies en 24h"
      />
      <BestCryptos
        data={stats?.newestCoins}
        title="the best new cryptocurrencies en 24h"
      />
    </div>
  );
};

export default memo(Header);
