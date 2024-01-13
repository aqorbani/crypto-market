import { useEffect, useState } from "react";
import { searchCoin } from "../../services/CryptoApi";

const FilterSearch = () => {
  const [searchText, setSearchText] = useState("");
  const [coins, setCoins] = useState([]);

  useEffect(() => {
    const controller = new AbortController();
    setCoins([]);
    if (!searchText) return;
    const search = async () => {
      try {
        const res = await fetch(searchCoin(searchText), {
          signal: controller.signal,
        });
        const json = await res.json();
        console.log(json);
        if (json.coins) {
          setCoins(json.coins);
        } else {
          alert(json.status.error_message);
        }
      } catch (error) {
        if (error.name !== "AbortError") {
          alert(error.message);
        }
      }
    };
    search();
    return () => controller.abort();
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
      {coins ? (
        <div className="relative">
          <ul className="absolute bg-white max-h-80 overflow-y-scroll">
            {coins.map((coin) => (
              <li key={coin.id}>
                <img src={coin.thumb} alt={coin.name} />
                {coin.name}
              </li>
            ))}
          </ul>
        </div>
      ) : (
        ""
      )}
    </div>
  );
};

export default FilterSearch;
