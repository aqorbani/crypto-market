import PropTypes from "prop-types";

const FilterCurrency = ({ currency, setCurrency }) => {
  FilterCurrency.propTypes = {
    currency: PropTypes.string,
    setCurrency: PropTypes.func,
  };
  return (
    <div className="relative w-full lg:max-w-sm">
      <select
        className="w-full p-2.5 text-gray-500 bg-white border rounded-md shadow-sm outline-none appearance-none focus:border-gray-800"
        value={currency}
        onChange={(e) => setCurrency(e.target.value)}
      >
        <option value="usd">USD</option>
        <option value="eur">EUR</option>
        <option value="jpy">JPY</option>
      </select>
    </div>
  );
};

export default FilterCurrency;
