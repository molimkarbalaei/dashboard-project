import React from "react";
import { BsCurrencyDollar } from "react-icons/bs";
import { GoPrimitiveDot } from "react-icons/go";
import { Stacked, Pie, Button, SparkLine } from "../components";
import {
  earningData,
  SparklineAreaData,
  ecomPieChartData,
} from "../data/dummy";
import { useStateContext } from "../context/ContextProvider";

const Ecommerce = () => {
  // define the state for the theme settings:
  const { currentColor } = useStateContext();
  return (
    <div className="mt-12">
      <div className="flex flex-wrap lg:flex-nowrap justify-center">
        <div
          className="bg-white dark:text-gray-400 dark:bg-secondary-dark-bg h-44
        rounded-xl w-full lg:w-80 p-8 pt-9 m-3 bg-hero-pattern bg-no-repeat bg-cover bg-center"
        >
          <div className="flex justify-between items-center">
            <div>
              <p className="font-bold text-gray-400 ">Earnings</p>
              <p className="text-2xl">$63,448.78</p>
            </div>
          </div>
          <div className="mt-6 ">
            {/* add some props to the button: */}
            <Button
              color="white"
              bgColor={currentColor}
              text="Download"
              borderRadius="10px"
              size="md"
            />
          </div>
        </div>
        {/* the cards: */}
        <div className="flex m-3 flex-wrap justify-center gap-1 items-center ">
          {/* map the cards: */}
          {earningData.map((item) => (
            <div
              key={item.key}
              className="bg-white dark:text-gray-200 dark:bg-secondary-dark-bg md:w-56 p-4 pt-9 rounded-2xl"
            >
              <button
                type="button"
                style={{
                  color: item.iconColor,
                  backgroundColor: item.iconBg,
                }}
                className="text-2xl hover:drop-shadow-xl opacity-0.9 rounded-full p-4 "
              >
                {item.icon}
              </button>
              <p className="mt-3">
                <span className="text-lg font-semibold">{item.amount}</span>
                <span className={`text-sm text-${item.pcColor} ml-2`}>
                  {item.percentage}
                </span>
              </p>
              <p className="text-sm text-gray-400 mt-1 ">{item.title}</p>
            </div>
          ))}
        </div>
      </div>
      {/* Revenue Updates: */}
      <div className="flex gap-10 flex-wrap justify-center">
        <div className="bg-white dark:bg-secondary-dark-bg dark:text-gray-200 rounded-2xl m-3 p-4 md:w-780 ">
          <div className="flex justify-between">
            <p className="font-semibold text-xl">Revenue Updates</p>
            <div className="flex items-center gap-4">
              <p className="flex items-center gap-2 text-gray-600 hover:drop-shadow-xl">
                <span>
                  <GoPrimitiveDot />
                </span>
                <span>Expense</span>
              </p>
              <p className="flex items-center gap-2 text-green-400 hover:drop-shadow-xl">
                <span>
                  <GoPrimitiveDot />
                </span>
                <span>Budget</span>
              </p>
            </div>
          </div>
          <div className="mt-10 flex gap-10 justify-center flex-wrap">
            <div className="border-r-1 m-4 pr-10 border-color ">
              <div>
                <p>
                  <span className="text-3xl font-semibold">$93,438</span>
                  <span className="p-1.5 cursor-pointer hover:drop-shadow-xl rounded-full bg-green-400 ml-3 text-white text-sm">
                    23%
                  </span>
                </p>
                <p className="text-gray-400 mt-1">Budget</p>
              </div>
              <div className="mt-8">
                <p>
                  <span className="text-3xl font-semibold">$48,487</span>
                </p>
                <p className="text-gray-400 mt-1">Expense</p>
              </div>
              {/* sparkline chart: */}
              <div className="mt-5">
                <SparkLine
                  currentColor={currentColor}
                  id="line-sparkline"
                  type="Line"
                  height="80px"
                  width="250px"
                  data={SparklineAreaData}
                  color={currentColor}
                />
              </div>
              {/* button for downloads: */}
              <div className="mt-10 ">
                <Button
                  color="white"
                  text="Download Report"
                  bgColor={currentColor}
                  borderRadius="10px"
                />
              </div>
            </div>
            {/* for expense and budget chart: */}
            <div>
              <Stacked width="320px" height="360px" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Ecommerce;

// after navbar and sidebar: we go to first page: ecommerce
