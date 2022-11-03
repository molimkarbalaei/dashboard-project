import React from "react";
import {
  ChartComponent,
  SeriesCollectionDirective,
  SeriesDirective,
  Inject,
  LineSeries,
  DateTime,
  Legend,
  Tooltip,
} from "@syncfusion/ej2-react-charts";

import {
  lineCustomSeries,
  LinePrimaryXAxis,
  LinePrimaryYAxis,
} from "../../data/dummy";
// for changing based on the Mode:
import { useStateContext } from "../../context/ContextProvider";

const LineChart = () => {
  // for changing based on the Mode:
  const { currentMode } = useStateContext();
  return (
    <ChartComponent
      id="line-chart"
      height="420px"
      // for x axis base on the year:
      primaryXAxis={LinePrimaryXAxis}
      // for y axis base on the value:
      primaryYAxis={LinePrimaryYAxis}
      // for removing the border:
      chartArea={{ border: { width: 0 } }}
      // for tooltip: hover over the chart to see the value
      tooltip={{ enable: true }}
      // changing based on the Mode:
      background={currentMode === "Dark" ? "#33373e" : "#fff"}
    >
      <Inject services={[LineSeries, DateTime, Legend, Tooltip]} />
      <SeriesCollectionDirective>
        {lineCustomSeries.map((item, index) => (
          <SeriesDirective key={index} {...item} />
        ))}
      </SeriesCollectionDirective>
    </ChartComponent>
  );
};

export default LineChart;
