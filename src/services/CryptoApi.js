const BASE_URL = "https://api.coingecko.com/api/v3";
const API_KEY = "&x_cg_demo_api_key=CG-ttXMzXuzSvdyD97u9qHtf5Ci";

const getCoinList = () => {
  return (
    BASE_URL +
    "/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=20&page=1&sparkline=false" +
    API_KEY
  );
};

export { getCoinList };
