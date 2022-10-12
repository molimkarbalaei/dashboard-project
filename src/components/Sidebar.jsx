// start to edit sidebar:
// we have to link the sidebar to the app.js, switch between the pages
import React from "react";
import { Link, NavLink } from "react-router-dom";
import { SiShopware } from "react-icons/si";
import { MdOutlineCancel } from "react-icons/md";
import { TooltipComponent } from "@syncfusion/ej2-react-popups";

import { links } from "../data/dummy";

const Sidebar = () => {
  // step by step:
  // 1. we have to create a function to close the sidebar
  // 2. we have to create a function to open the sidebar
  // 3. we have to create a function to show the sidebar
  // 4. we have to create a function to hide the sidebar
  // 5. we have to create a function to show the tooltip
  // 6. we have to create a function to hide the tooltip

  const activeMenu = true;

  return (
    //md: medium device the overflow is hidden:
    // on md (medium device) and hover the overflow is auto
    <div className="ml-3 h-screen md:overflow-hidden overflow-auto md:hover:overflow-auto pb-10">
      {activeMenu && (
        <>
          <div className="flex justify-between items-center">
            <Link
              to="/"
              onClick={() => {}}
              className="items-center gap-3 ml-3 mt-4 flex text-xl font-bold"
            >
              <SiShopware /> <span>Shoppy</span>
            </Link>
          </div>
        </>
      )}
    </div>
  );
};

export default Sidebar;
