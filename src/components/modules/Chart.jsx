import PropTypes from "prop-types";
import { convertData } from "../../helpers/ConvertData";
import { useState } from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";
const Chart = ({ chart, setChart }) => {
  Chart.propTypes = {
    chart: PropTypes.array,
    setChart: PropTypes.func,
  };
  const [type, setType] = useState("prices");

  return (
    <>
      <div className="justify-center items-center flex overflow-x-hidden overflow-y-scroll fixed inset-0 z-50 outline-none focus:outline-none">
        <div className="relative w-auto my-6 mx-auto max-w-3xl">
          {/*content*/}
          <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
            {/*header*/}
            <div className="flex items-start justify-between p-5 border-b border-solid border-blueGray-200 rounded-t">
              <div className="flex flex-col">
                <h3 className="text-3xl font-semibold">{chart.coin.name}</h3>
                <div className="flex mt-1">
                  <h5 className="p-1">Price: ${chart.coin.current_price}</h5>|
                  <h5 className="p-1">ATH: ${chart.coin.ath}</h5>|
                  <h5 className="p-1">Market Caps: ${chart.coin.market_cap}</h5>
                </div>
              </div>
              <button
                className="p-1 ml-auto bg-transparent border-0 text-black float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                onClick={() => setChart(null)}
              >
                <span className="bg-transparent text-black h-6 w-6 text-2xl block outline-none focus:outline-none">
                  ×
                </span>
              </button>
            </div>
            {/*body*/}
            <div className="relative p-6 flex-auto">
              {/* <p className="my-4 text-blueGray-500 text-lg leading-relaxed">
                
              </p> */}
              <div className="min-w-96 min-h-64">
                <LineChart
                  width={500}
                  height={500}
                  data={convertData(chart, type)}
                  margin={{
                    top: 5,
                    right: 30,
                    left: 20,
                    bottom: 5,
                  }}
                >
                  <CartesianGrid stroke="#eee" />
                  <XAxis dataKey="date" />
                  <YAxis dataKey={type} domain={["auto", "auto"]} />
                  <Tooltip />
                  <Legend />
                  <Line
                    type="monotone"
                    dataKey={type}
                    stroke="#a784ff"
                    dot=""
                    strokeWidth={1}
                  />
                </LineChart>
                <button
                  className="bg-gray-800 text-white active:bg-emerald-600 font-bold uppercase text-sm px-2 py-1 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                  type="button"
                  onClick={() => setType("prices")}
                >
                  Prices
                </button>
                <button
                  className="bg-gray-800 text-white active:bg-emerald-600 font-bold uppercase text-sm px-2 py-1 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                  type="button"
                  onClick={() => setType("market_caps")}
                >
                  Market Caps
                </button>
                <button
                  className="bg-gray-800 text-white active:bg-emerald-600 font-bold uppercase text-sm px-2 py-1 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                  type="button"
                  onClick={() => setType("total_volumes")}
                >
                  Total Volumes
                </button>
              </div>
            </div>
            {/*footer*/}
            <div className="flex items-center justify-end p-6 border-t border-solid border-blueGray-200 rounded-b">
              <button
                className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                type="button"
                onClick={() => setChart(null)}
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
    </>
  );
};

export default Chart;
