import { useEffect, useState } from "react";
import CoinTable from "../modules/CoinTable";
import { getCoinList } from "../../services/CryptoApi";
import Pagination from "../modules/Pagination";
import Filter from "../modules/Filter";
import Chart from "../modules/Chart";

const Home = () => {
  const [coins, setCoins] = useState([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);
  const [currency, setCurrency] = useState("usd");
  const [chart, setChart] = useState(null);

  useEffect(() => {
    const getData = async () => {
      try {
        setLoading(true);
        const res = await fetch(getCoinList(page, currency));
        const json = await res.json();
        setCoins(json);
        setLoading(false);
      } catch (error) {
        setLoading(true);
      }
    };
    getData();
  }, [page, currency]);
  return (
    <div className="bg-gray-50 min-h-screen flex justify-center">
      <div className="bg-gray-50 flex items-center flex-col w-full lg:w-3/4">
        <div className="bg-purple-950 text-white w-full p-5 m-5 text-center rounded">
          <p className="font-mono text-xl font-black">Crypto App</p>
        </div>
        <div className="w-full">
          <Filter currency={currency} setCurrency={setCurrency} />
        </div>
        <div className="w-full">
          <CoinTable
            coins={coins}
            loading={loading}
            page={page}
            currency={currency}
            setChart={setChart}
          />
          <Pagination page={page} setPage={setPage} />
        </div>
        <div className="w-full">
          {!!chart && <Chart setChart={setChart} chart={chart} />}
        </div>
        <div>Footer</div>
      </div>
    </div>
  );
};

export default Home;
