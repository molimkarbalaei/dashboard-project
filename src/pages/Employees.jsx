import React from "react";
//after orders we go for employees:

// after adding ecommerce page we go to Employees page:

import {
  GridComponent,
  ColumnDirective,
  ColumnsDirective,
  Page,
  Inject,
  Search,
  Toolbar,
} from "@syncfusion/ej2-react-grids";

import { employeesData, employeesGrid } from "../data/dummy";
import { Header } from "../components";

const Employees = () => {
  return (
    <div className="m-2 md:m-10 p-2 md:p-10 bg-white rounded-3xl">
      <Header category="Page" title="Employees" />
      {/*  we use syncfusion for implementing the grid: */}
      {/* for passing the data: we bring:*/}
      <GridComponent
        dataSource={employeesData}
        allowPaging
        allowSorting
        toolbar={["Search"]}
        width="auto"
      >
        <ColumnsDirective>
          {/* data goes here: */}
          {employeesGrid.map((item, index) => (
            // for each *item* we want to return a column directive:
            // we copy all data with spread operator:
            <ColumnDirective key={index} {...item} />
          ))}
        </ColumnsDirective>
        {/*LATER  we use inject for paging the data */}
        <Inject services={[Page, Search, Toolbar]} />
      </GridComponent>
    </div>
  );
};

export default Employees;
