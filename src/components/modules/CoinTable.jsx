import PropTypes from "prop-types";
import CoinTableRow from "./CoinTableRow";
import Loading from "./Loading";

const CoinTable = ({ coins, loading, page }) => {
  CoinTable.propTypes = {
    coins: PropTypes.array,
    loading: PropTypes.bool,
    page: PropTypes.number,
  };
  return (
    <div className="w-full p-3">
      {loading ? (
        <Loading />
      ) : (
        <table className="overflow-scroll w-full border-collapse">
          <thead className="border-b-2 border-solid border-gray-300">
            <tr>
              <th>#</th>
              <th>Name</th>
              <th>Price</th>
              <th>24h</th>
              <th>Total Volume</th>
              <th>Growth</th>
            </tr>
          </thead>
          <tbody className="[&>*:nth-child(odd)]:bg-gray-50 [&>*:nth-child(even)]:bg-white">
            {coins.map((coin, index) => (
              <CoinTableRow
                key={coin.id}
                coin={coin}
                index={index + (page - 1) * 20}
              />
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default CoinTable;
