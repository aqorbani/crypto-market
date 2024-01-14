import { useEffect, useState } from "react";
import { searchCoin } from "../../services/CryptoApi";
import Loading from "./Loading";

const FilterSearch = () => {
  const [searchText, setSearchText] = useState("");
  const [coins, setCoins] = useState([]);
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  useEffect(() => {
    const controller = new AbortController();
    setMessage("");
    setCoins([]);
    if (!searchText) return;
    setLoading(true);
    const search = async () => {
      try {
        const res = await fetch(searchCoin(searchText), {
          signal: controller.signal,
        });
        const json = await res.json();
        console.log(json);
        if (json.coins && json.coins.length > 0) {
          setCoins(json.coins);
          setLoading(false);
        } else if (json.coins.length == 0) {
          setMessage("Data not found");
          setLoading(true);
        } else {
          setMessage(json.status.error_message);
          setLoading(true);
        }
      } catch (error) {
        if (error.name !== "AbortError") {
          setMessage(error.message);
        }
        setLoading(true);
      }
    };
    search();
    return () => {
      controller.abort();
    };
  }, [searchText]);

  return (
    <div className="w-full lg:max-w-sm">
      <input
        name="search"
        type="text"
        value={searchText}
        onChange={(e) => setSearchText(e.target.value)}
        className="w-full rounded focus:border-gray-900"
        placeholder="Search"
      />
      {coins.length != 0 ? (
        <div className={searchText !== "" ? "relative" : "hidden"}>
          {!loading ? (
            <ul className="absolute bg-white max-h-80 overflow-y-scroll border-solid border-gray-800 p-2">
              {coins.map((coin) => (
                <li key={coin.id}>
                  <img src={coin.thumb} alt={coin.name} />
                  {coin.name}
                </li>
              ))}
            </ul>
          ) : (
            <Loading wh={20} />
          )}
        </div>
      ) : (
        <div className={searchText !== "" ? "relative" : "hidden"}>
          <ul className="absolute bg-white max-h-80 overflow-y-scroll border-solid border-gray-800 p-2">
            {message ? <p>{message}</p> : <Loading wh={20} />}
          </ul>
        </div>
      )}
    </div>
  );
};

export default FilterSearch;
