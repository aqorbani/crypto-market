import { Watch } from "react-loader-spinner";

const Loading = () => {
  return (
    <div className="flex justify-center items-center">
      <Watch
        visible={true}
        height="80"
        width="80"
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
