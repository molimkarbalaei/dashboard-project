import React from "react";
// after employees we go to customers:
import {
  GridComponent,
  ColumnsDirective,
  ColumnDirective,
  Page,
  Search,
  Selection,
  Inject,
  Edit,
  Toolbar,
  Sort,
  Filter,
} from "@syncfusion/ej2-react-grids";

import { customersData, customersGrid } from "../data/dummy";
import { Header } from "../components";

const Customers = () => {
  return (
    <div className="m-2 md:m-10 p-2 md:p-10 bg-white rounded-3xl">
      <Header category="Page" title="Customers" />
      {/*  we use syncfusion for implementing the grid: */}
      {/* for passing the data: we bring:*/}
      <GridComponent
        dataSource={customersData}
        allowPaging
        allowSorting
        toolbar={["Delete", "Search"]}
        editSettings={{ allowDeleting: true, allowEditing: true }}
        width="auto"
      >
        <ColumnsDirective>
          {/* data goes here: */}
          {customersGrid.map((item, index) => (
            // for each *item* we want to return a column directive:
            // we copy all data with spread operator:
            <ColumnDirective key={index} {...item} />
          ))}
        </ColumnsDirective>
        {/*LATER  we use inject for paging the data */}
        <Inject
          services={[Page, Toolbar, Search, Selection, Sort, Filter, Edit]}
        />
      </GridComponent>
    </div>
  );
};

export default Customers;

// when we relaod it is back because we didn't save it in the database yet:
// we didn't do implementing any crowd functionality yet:
