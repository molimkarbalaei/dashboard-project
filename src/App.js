import React, { useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { FiSettings } from "react-icons/fi";
import { TooltipComponent } from "@syncfusion/ej2-react-popups";
import { Navbar, Footer, Sidebar, ThemeSettings } from "./components";
import {
  Ecommerce,
  Orders,
  Employees,
  Customers,
  Calendar,
  Kanban,
  Editor,
  ColorPicker,
  Line,
  Area,
  Bar,
  Pie,
  Financial,
  ColorMapping,
  Pyramid,
  Stacked,
} from "./pages";

import "./App.css";

// now we impoert the context:
import { useStateContext } from "./context/ContextProvider";

const App = () => {
  // now we bring the context here:
  const {
    activeMenu,
    themeSettings,
    setThemeSettings,
    currentColor,
    currentMode,
  } = useStateContext();

  return (
    // for working of dark mode we need to add a class to the body:
    <div className={currentMode === "Dark" ? "dark" : ""}>
      <BrowserRouter>
        <div className="flex relative dark:bg-main-dark-bg">
          <div className="fixed right-4 bottom-4" style={{ zIndex: "1000" }}>
            {/****1-**** we use tooltip component here:
           we use it becuse we want to show tooltip when user hover on the icon: */}
            <TooltipComponent content="Settings" position="Top">
              <button
                type="button"
                //turn on the theme settings:
                onClick={() => setThemeSettings(true)}
                className="text-3xl text-white p-3 hover:drop-shadow-xl hover:bg-light-gray"
                // we want to change the style based on the theme:
                style={{ backgroundColor: currentColor, borderRadius: "50%" }}
              >
                <FiSettings />
              </button>
            </TooltipComponent>
          </div>

          {/* ****2-**** go for sidebar: */}
          {activeMenu ? (
            <div className="w-72 fixed sidebar dark:bg-secondary-dark-bg bg-white">
              <Sidebar />
            </div>
          ) : (
            <div className="w-0 dark:bg-secondary-dark-bg">
              {" "}
              <Sidebar />
            </div>
          )}
          {/* navigation bar: based on if the menu is active or not*/}
          <div
            className={
              //   //cause we have similar ones:
              `dark:bg-main-dark-bg bg-main-bg min-h-screen w-full ${
                activeMenu ? "md : ml-72" : "flex-2"
              }`
              //   activeMenu
              //     ? "dark:bg-main-dark-bg bg-main-bg min-h-screen md:ml-72 w-full"
              //     : "dark:bg-main-bg bg-main-bg min-h-screen w-full flex-2"
            }
          >
            {/* for navbar */}
            <div className="fixed md:static bg-main-bg dark:bg-main-dark-bg navbar w-full">
              <Navbar />
            </div>

            {/* main div for routing menu: */}
            <div>
              {/* edit theme settig: we show it if only it is true */}
              {themeSettings && <ThemeSettings />}

              <Routes>
                {/* DASHBOARD: */}
                <Route path="/" element={<Ecommerce />} />
                <Route path="/ecommerce" element={<Ecommerce />} />

                {/* PAGES: */}
                <Route path="/orders" element={<Orders />} />
                <Route path="/employees" element={<Employees />} />
                <Route path="/customers" element={<Customers />} />
                {/* Apps: */}
                <Route path="/calendar" element={<Calendar />} />
                <Route path="/kanban" element={<Kanban />} />
                <Route path="/editor" element={<Editor />} />
                <Route path="/color-picker" element={<ColorPicker />} />

                {/* Charts */}

                <Route path="/line" element={<Line />} />
                <Route path="/area" element={<Area />} />
                <Route path="/bar" element={<Bar />} />
                <Route path="/pie" element={<Pie />} />
                <Route path="/financial" element={<Financial />} />
                <Route path="/color-mapping" element={<ColorMapping />} />
                <Route path="/pyramid" element={<Pyramid />} />
                <Route path="/stacked" element={<Stacked />} />
              </Routes>
            </div>
          </div>
        </div>
      </BrowserRouter>
    </div>
  );
};

export default App;

// we install: $ npm instal --legacy--peer-peps

//1- creating tooltip component for hover on the icon:
