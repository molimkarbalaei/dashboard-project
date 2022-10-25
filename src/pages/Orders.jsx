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
    </div>
  );
};

export default Orders;
