import { Watch } from "react-loader-spinner";
import PropTypes from "prop-types";

const Loading = ({ wh }) => {
  Loading.propTypes = {
    wh: PropTypes.number,
  };
  return (
    <div className="flex justify-center items-center">
      <Watch
        visible={true}
        height={wh}
        width={wh}
        radius="48"
        color="#000000"
        ariaLabel="watch-loading"
        wrapperStyle={{}}
        wrapperClass=""
      />
    </div>
  );
};

export default Loading;
