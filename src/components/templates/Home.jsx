import { useEffect, useState } from "react";
import CoinTable from "../modules/CoinTable";
import { getCoinList } from "../../services/CryptoApi";

const Home = () => {
  const [coins, setCoins] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getData = async () => {
      const res = await fetch(getCoinList());
      const json = await res.json();
      setCoins(json);
      setLoading(false);
    };
    getData();
  }, []);
  return (
    <div className="bg-gray-50 min-h-screen flex justify-center">
      <div className="bg-gray-50 flex items-center flex-col w-full lg:w-3/4">
        <h1 className="text-red-600">Hello world</h1>
        <div>Header</div>
        <div className="w-full">
          <CoinTable coins={coins} loading={loading} />
        </div>
        <div>Footer</div>
      </div>
    </div>
  );
};

export default Home;
