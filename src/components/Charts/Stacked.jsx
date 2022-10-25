import React from "react";
// after adding stacked part in src\pages\Ecommerce.jsx:
import {
  ChartComponent,
  SeriesCollectionDirective,
  SeriesDirective,
  Inject,
  Legend,
  Category,
  StackingColumnSeries,
  Tooltip,
} from "@syncfusion/ej2-react-charts";

import {
  stackedCustomSeries,
  stackedPrimaryYAxis,
  stackedPrimaryXAxis,
} from "../../data/dummy";

// prepar some props for the chart:
const Stacked = ({ width, height }) => {
  // create chart:
  return (
    <ChartComponent
      width={width}
      height={height}
      id="charts"
      primaryXAxis={stackedPrimaryXAxis}
      primaryYAxis={stackedPrimaryYAxis}
      // for moving the border:
      chartArea={{ border: { width: 0 } }}
      // for moving the tooltip and showing the values:
      tooltip={{ enable: true }}
      // for legend:
      legendSettings={{ background: "white" }}
    >
      <Inject services={[StackingColumnSeries, Category, Legend, Tooltip]} />
      <SeriesCollectionDirective>
        {/* bring dummy data: index cause we have 0,1 */}
        {stackedCustomSeries.map((item, index) => (
          // bring the data points:
          <SeriesDirective key={index} {...item} />
        ))}
      </SeriesCollectionDirective>
    </ChartComponent>
  );
};

export default Stacked;
