import React from "react";
import {
  ChartComponent,
  SeriesCollectionDirective,
  SeriesDirective,
  Inject,
  DateTime,
  Legend,
  SplineAreaSeries,
} from "@syncfusion/ej2-react-charts";

import { Header } from "../../components";
import {
  areaCustomSeries,
  areaPrimaryXAxis,
  areaPrimaryYAxis,
} from "../../data/dummy";
// for changing based on the Mode:
import { useStateContext } from "../../context/ContextProvider";

const Area = () => {
  // for changing based on the Mode:
  const { currentMode } = useStateContext();
  return (
    <div className="m-4 md:m-10 mt-24 p-10 bg-white rounded-3xl dark:bg-secondary-dark-bg">
      <Header category="Area" title="Inflation Rate in percentage" />
      <ChartComponent
        id="area-chart"
        height="420px"
        // for x axis base on the year:
        primaryXAxis={areaPrimaryXAxis}
        // for y axis base on the value:
        primaryYAxis={areaPrimaryYAxis}
        // for removing the border:
        chartArea={{ border: { width: 0 } }}
        // for tooltip: hover over the chart to see the value
        tooltip={{ enable: true }}
        // changing based on the Mode:
        background={currentMode === "Dark" ? "#33373e" : "#fff"}
      >
        <Inject services={[DateTime, Legend, SplineAreaSeries]} />
        <SeriesCollectionDirective>
          {areaCustomSeries.map((item, index) => (
            <SeriesDirective key={index} {...item} />
          ))}
        </SeriesCollectionDirective>
      </ChartComponent>
    </div>
  );
};

export default Area;
