import { useEffect, useState } from "react";
import CoinTable from "../modules/CoinTable";
import { getCoinList } from "../../services/CryptoApi";

const Home = () => {
  const [coins, setCoins] = useState([]);
  useEffect(() => {
    const getData = async () => {
      const res = await fetch(getCoinList());
      const json = await res.json();
      setCoins(json);
    };
    getData();
  }, []);
  return (
    <div className="bg-white min-h-screen flex justify-center">
      <div className="bg-green-50 flex items-center flex-col w-full lg:w-3/4">
        <h1 className="text-red-600">Hello world</h1>
        <div>Header</div>
        <div className="w-full">
          <CoinTable coins={coins} />
        </div>
        <div>Footer</div>
      </div>
    </div>
  );
};

export default Home;
