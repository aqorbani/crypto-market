import PropTypes from "prop-types";
import chartUp from "../../assets/svg/chart-up.svg";
import chartDown from "../../assets/svg/chart-down.svg";

const CoinTableRow = ({
  coin: {
    name,
    symbol,
    image,
    current_price,
    total_volume,
    price_change_percentage_24h: price_change,
  },
  index,
  currency,
}) => {
  CoinTableRow.propTypes = {
    coin: PropTypes.object,
    index: PropTypes.number,
    currency: PropTypes.string,
  };
  return (
    <tr className="text-center">
      <td>{index + 1}</td>
      <td>
        <div className="flex justify-center items-center p-1">
          <img src={image} alt={name} width={15} height={15} />
          <span className="p-1">{name}</span>
          <span>({symbol.toUpperCase()})</span>
        </div>
      </td>
      <td>
        {currency == "usd" && "$"}
        {currency == "eur" && "€"}
        {currency == "jpy" && "¥"}
        {current_price.toLocaleString()}
      </td>
      <td>
        <p className={price_change >= 0 ? "text-green-700" : "text-red-700"}>
          %{price_change.toFixed(2)}
        </p>
      </td>
      <td>{total_volume.toLocaleString()}</td>
      <td>
        <img src={price_change >= 0 ? chartUp : chartDown} alt={name} />
      </td>
    </tr>
  );
};
export default CoinTableRow;
