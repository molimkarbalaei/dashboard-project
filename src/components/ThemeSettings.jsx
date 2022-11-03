import React from "react";
// the small change is to import the ThemeSettings component
import { MdOutlineCancel } from "react-icons/md";
import { BsCheck } from "react-icons/bs";
import { TooltipComponent } from "@syncfusion/ej2-react-popups";

import { themeColors } from "../data/dummy";
import { useStateContext } from "../context/ContextProvider";

const ThemeSettings = () => {
  // LATER:
  // for working with the theme colors: from contextprovider.js
  const { setColor, setMode, currentMode, currentColor, setThemeSettings } =
    useStateContext();

  // first create A layout for the theme settings:
  return (
    <div className="bg-half-transparent w-screen fixed nav-item top-0 right-0">
      <div className="float-right h-screen dark:text-gray-400 bg-white dark:[#484B52] w-400">
        {/* sidebar for themesettings: */}
        <div className="flex justify-between p-4 ml-4 items-center">
          <p className="font-semibold text-xl"> Settings</p>
          {/* button for close the sidebar: */}
          <button
            type="button"
            className="text-2xl p-3 hover:drop-shadow-xl hover:bg-light-gray"
            //close the sidebar:
            onClick={() => setThemeSettings(false)}
            style={{ color: "rgb(153,171,180", borderRadius: "50%" }}
          >
            <MdOutlineCancel />
          </button>
          {/* now themes options: */}
        </div>
        <div className="flex-col border-t-1 border-color p-4 ml-4">
          <p className="font-semibold text-lg">Theme Option</p>
          <div className="mt-4">
            <input
              type="radio"
              id="light"
              name="theme"
              value="Light"
              className="cursor-pointer"
              onChange={setMode}
              checked={currentMode === "Light"}
            />
            <label htmlFor="light" className="ml-2 text-md cursor-pointer">
              {" "}
              Light
            </label>
          </div>
          <div className="mt-4">
            <input
              type="radio"
              id="light"
              name="theme"
              value="Dark"
              className="cursor-pointer"
              onChange={setMode}
              checked={currentMode === "Dark"}
            />
            <label htmlFor="dark" className="ml-2 text-md cursor-pointer">
              {" "}
              Dark
            </label>
          </div>
        </div>
        {/* theme color: */}
        <div className="flex-col border-t-1 border-color p-4 ml-4">
          <p className="font-semibold text-lg">Theme Colors</p>
          <div className="flex gap-3">
            {themeColors.map((item, index) => (
              <TooltipComponent
                key={index}
                content={item.name}
                position="TopCenter"
              >
                <div className="reletive mt-2 cursor-pointer gap-5 items-center ">
                  {/*  we have to change it based on the theme */}
                  <button
                    type="button"
                    className="rounded-full w-10 h-10 cursor-pointer"
                    style={{ backgroundColor: item.color }}
                    onClick={() => setColor(item.color)}
                  >
                    {/* for check which theme is chosed */}
                    <BsCheck
                      className={`ml-2 text-2xl text-white ${
                        item.color === currentColor ? "block" : "hidden"
                      }`}
                    />
                  </button>
                </div>
              </TooltipComponent>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ThemeSettings;
