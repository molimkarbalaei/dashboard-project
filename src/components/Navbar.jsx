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
    <button
      type="button"
      onClick={customFunc}
      style={{ color }}
      className="relative text-xl rounded-full p-3 hover:bg-light-gray"
    >
      <span
        style={{ background: dotcolor }}
        className="absolute inline-flex rounded-full h-2 w-2 right-2 top-2"
      >
        {icon}
      </span>
    </button>
  </TooltipComponent>
);

const Navbar = () => {
  // 1- we can get activeMenusetActiveMenu state from context:
  const { activeMenu, setActiveMenu } = useStateContext();
  //2- implimenting the navbar: mx= margin left and right

  return (
    <div className="flex justify-between p-2 md:mx-6 relative">
      {/* we can pass some props: */}
      {/* if the menu is open so close it or viseversa */}
      {/*  color is sink the themecolor */}

      {/* 1- create a Navbutton. */}
      <NavButton
        // this is that button of menu icon:
        title="Menu"
        customFunc={() => setActiveMenu((prevActiveMenu) => !prevActiveMenu)}
        color="blue"
        icon={<AiOutlineMenu />}
        // so now we have every thing to create the navbutton.
      />

      {/* 2- create a search bar: */}
      <div className="flex ">
        <NavButton
          title="Cart"
          customFunc={() => handleClick("cart")}
          color="blue"
          icon={<FiShoppingCart />}
        />
      </div>

      {/* 3- create a chat icon: */}
      <NavButton
        title="Chat"
        dotcolor="#03C9D7"
        customFunc={() => handleClick("chat")}
        color="blue"
        icon={<BsChatLeft />}
      />

      {/* 4- create a notification icon: */}
      <NavButton
        title="Notification"
        dotcolor="#03C9D7"
        customFunc={() => handleClick("notification")}
        color="blue"
        icon={<RiNotification3Line />}
      />

      {/* 5- create a user profile icon: */}
    </div>
  );
};
export default Navbar;
