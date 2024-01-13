import PropTypes from "prop-types";
import FilterCurrency from "./FilterCurrency";

const Filter = ({ currency, setCurrency }) => {
  Filter.propTypes = {
    currency: PropTypes.string,
    setCurrency: PropTypes.func,
  };
  return <FilterCurrency currency={currency} setCurrency={setCurrency} />;
};

export default Filter;
