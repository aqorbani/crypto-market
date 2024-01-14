const BASE_URL = "https://api.coingecko.com/api/v3";
const API_KEY = "&x_cg_demo_api_key=CG-ttXMzXuzSvdyD97u9qHtf5Ci";

const getCoinList = (page, currency) => {
  return (
    BASE_URL +
    "/coins/markets?vs_currency=" +
    currency +
    "&order=market_cap_desc&per_page=20&page=" +
    page +
    "&sparkline=false" +
    API_KEY
  );
};

const searchCoin = (query) => {
  return BASE_URL + "/search?query=" + query;
};

const coinChart = (coin) => {
  return BASE_URL + "/coins/" + coin + "/market_chart?vs_currency=usd&days=7";
};

export { getCoinList, searchCoin, coinChart };
