import React from "react";

// to bring the menu icon when we close the menu in sidebar:
import { useEffect } from "react";
import { AiOutlineMenu } from "react-icons/ai";
import { FiShoppingCart } from "react-icons/fi";
import { BsChatLeft } from "react-icons/bs";
import { RiNotification3Line } from "react-icons/ri";
import { MdKeyboardArrowDown } from "react-icons/md";
import { TooltipComponent } from "@syncfusion/ej2-react-popups";
// import avatar image:
import avatar from "../data/avatar.jpg";
// import few component:
import { Cart, Chat, Notification, UserProfile } from ".";
// import the context:
import { useStateContext } from "../context/ContextProvider";

//3- create a new component:that it accepts *****the properties****:=>
// همون ردیف بالایی که با تول تیپ کامپوننت رپ شده.
const NavButton = ({ title, customFunc, icon, color, dotcolor }) => (
  <TooltipComponent content={title} position="BottomCenter">
    <button></button>
  </TooltipComponent>
);

const Navbar = () => {
  // 1- we can get activeMenusetActiveMenu state from context:
  const { activeMenu, setActiveMenu } = useStateContext();
  //2- implimenting the navbar: mx= margin left and right

  return (
    <div className="flex justify-between p-2 md:mx-6 relative">
      <NavButton />
    </div>
  );
};

export default Navbar;
