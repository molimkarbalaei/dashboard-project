import React from "react";
// after adding ecommerce page we go to orders page:
// we do: sort by name, customer name, the amount, status and order id.

import {
  GridComponent,
  ColumnDirective,
  ColumnsDirective,
  Resize,
  Sort,
  Filter,
  Page,
  Inject,
  Edit,
  PdfExport,
  ExcelExport,
  ContextMenu,
} from "@syncfusion/ej2-react-grids";

import { ordersData, contextMenuItems, ordersGrid } from "../data/dummy";
import { Header } from "../components";

const Orders = () => {
  return (
    <div className="m-2 md:m-10 p-2 md:p-10 bg-white rounded-3xl">
      <Header category="Page" title="Orders" />
      {/*  we use syncfusion for implementing the grid: */}
      {/* for passing the data: we bring:*/}
      <GridComponent
        id="gridcomp"
        dataSource={ordersData}
        allowPaging
        allowSorting
      >
        <ColumnsDirective>
          {/* data goes here: */}
          {ordersGrid.map((item, index) => (
            // for each *item* we want to return a column directive:
            // we copy all data with spread operator:
            <ColumnDirective key={index} {...item} />
          ))}
        </ColumnsDirective>
        {/*LATER  we use inject for paging the data */}
        <Inject
          services={[
            Resize,
            Sort,
            Filter,
            Page,
            Edit,
            PdfExport,
            ExcelExport,
            ContextMenu,
          ]}
        />
      </GridComponent>
    </div>
  );
};

export default Orders;
