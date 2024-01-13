import { useEffect, useState } from "react";
import CoinTable from "../modules/CoinTable";
import { getCoinList } from "../../services/CryptoApi";
import Pagination from "../modules/Pagination";

const Home = () => {
  const [coins, setCoins] = useState([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);

  useEffect(() => {
    const getData = async () => {
      setLoading(true);
      const res = await fetch(getCoinList(page));
      const json = await res.json();
      setCoins(json);
      setLoading(false);
    };
    getData();
  }, [page]);
  return (
    <div className="bg-gray-50 min-h-screen flex justify-center">
      <div className="bg-gray-50 flex items-center flex-col w-full lg:w-3/4">
        <h1 className="text-red-600">Hello world</h1>
        <div>Header</div>
        <div className="w-full">
          <CoinTable coins={coins} loading={loading} page={page} />
          <Pagination page={page} setPage={setPage} />
        </div>
        <div>Footer</div>
      </div>
    </div>
  );
};

export default Home;
