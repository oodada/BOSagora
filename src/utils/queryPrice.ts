import { CoinGeckoClient } from "coingecko-api-v3-axios";

const client = new CoinGeckoClient({
  timeout: 10000,
  autoRetry: true,
});

export const coinID = "bosagora";

export const getBOAPrice = async () => {
  return client.simplePrice({
    ids: coinID,
    vs_currencies: "usd,krw",
    include_market_cap: false,
    include_24hr_vol: false,
    include_24hr_change: false,
    include_last_updated_at: true,
  });
};
