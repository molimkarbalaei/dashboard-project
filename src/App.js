import React, { useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { FiSettings } from "react-icons/fi";
import { TooltipComponent } from "@syncfusion/ej2-react-popups";
import "./App.css";

const App = () => {
  const activeMenu = true;
  return (
    <div>
      <BrowserRouter>
        <div className="flex relative dark:bg-main-dark-bg">
          <div className="fixed right-4 bottom-4" style={{ zIndex: "1000" }}>
            {/****1-**** we use tooltip component here:
           we use it becuse we want to show tooltip when user hover on the icon: */}
            <TooltipComponent content="Settings" position="Top">
              <button
                type="button"
                className="text-3xl p-3 hover:drop-shadow-xl hover:bg-light-gray text-white"
                // we want to change the style based on the theme:
                style={{ backgroundColor: "#1a202c", borderRadius: "50%" }}
              >
                <FiSettings />
              </button>
            </TooltipComponent>
          </div>

          {/* ****2-**** go for sidebar: */}
          {activeMenu ? (
            <div className="w-72 fixed sidebar dark:bg-secondary-dark-bg bg-white">
              Sidebar
            </div>
          ) : (
            <div className="w-0 dark:bg-secondary-dark-bg">sidebar w-0</div>
          )}
          {/* navigation bar: based on if the menu is active or not*/}
          <div
            className={
              //cause we have similar ones:
              `dark:bg-main-bg bg-main-bg min-h-screen w-full ${
                activeMenu ? "md : ml - 12" : "flex-2"
              }`
              //   activeMenu
              //     ? "dark:bg-main-bg bg-main-bg min-h-screen md:ml-12 w-full"
              //     : "dark:bg-main-bg bg-main-bg min-h-screen w-full flex-2"
            }
          >
            {/* for navbar */}
            <div className="fixed md:static bg-main-bg dark:bg-main-dark-bg navbar w-full">
              Navbar
            </div>
          </div>
          {/* main div for routing menu: */}
          <div>
            <Routes>
              {/* DASHBOARD: */}
              <Route path="/" element="ECommerce" />
              <Route path="/ecommerce" element="ECommerce" />

              {/* PAGES: */}
              <Route path="/orders" element="Orders" />
              <Route path="/employees" element="Employees" />
              <Route path="/customers" element="Customers" />

              {/* Apps: */}
              <Route path="/orders" element="Orders" />
            </Routes>
          </div>
        </div>
      </BrowserRouter>
    </div>
  );
};

export default App;

// we install: $ npm instal --legacy--peer-peps

//1- creating tooltip component for hover on the icon:
