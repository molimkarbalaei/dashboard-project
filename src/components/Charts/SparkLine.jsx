import React from "react";
// after implementing ecommerce charts we have to put;
import {
  SparklineComponent,
  Inject,
  SparklineTooltip,
} from "@syncfusion/ej2-react-charts";

// pasing all props:
const SparkLine = ({ id, height, width, color, data, type, currentColor }) => {
  return (
    <SparklineComponent
      id={id}
      height={height}
      width={width}
      lineWidth={1}
      valueType="Numeric"
      fill={color}
      border={{ color: currentColor, width: 2 }}
      dataSource={data}
      type={type}
      xName="x"
      yName="yval"
      // more props:
      tooltipSettings={{
        visible: true,
        format: "${x} : data ${yval}",
        // that line is for tooltip:
        trackLineSettings: {
          visible: true,
        },
      }}
      // for bolet points:
      markerSettings={{
        visible: ["All"],
      }}
    >
      {/* based on documentation: */}
      <Inject services={[SparklineTooltip]} />
    </SparklineComponent>
  );
};

export default SparkLine;
