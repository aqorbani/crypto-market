import PropTypes from "prop-types";
import CoinTableRow from "./CoinTableRow";

const CoinTable = ({ coins }) => {
  CoinTable.propTypes = {
    coins: PropTypes.array,
  };
  return (
    <div className="w-full p-3">
      <table className="w-full border-collapse">
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
            <CoinTableRow key={coin.id} coin={coin} index={index} />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default CoinTable;