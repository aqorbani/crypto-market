import PropTypes from "prop-types";
import FilterCurrency from "./FilterCurrency";
import FilterSearch from "./FilterSearch";

const Filter = ({ currency, setCurrency }) => {
  Filter.propTypes = {
    currency: PropTypes.string,
    setCurrency: PropTypes.func,
  };
  return (
    <div className="flex justify-between items-center">
      <FilterSearch currency={currency} setCurrency={setCurrency} />
      <FilterCurrency currency={currency} setCurrency={setCurrency} />
    </div>
  );
};

export default Filter;
