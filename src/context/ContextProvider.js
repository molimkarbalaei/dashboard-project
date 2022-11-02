/// react context api
import React, { createContext, useContext, useState } from "react";

// after that we will create a state of a context ==>

const StateContext = createContext();

// our initial state:
const initialState = {
  // is simple object
  chat: false,
  cart: false,
  userProfile: false,
  notification: false,
};

// now we will create a provider for our context ==>
export const ContextProvider = ({ children }) => {
  // lets add all states and logics we have: in our context:
  // 1- the state:
  const [activeMenu, setActiveMenu] = useState(true);
  const [state, setState] = useState(initialState);

  // 2- the logic: work when we click on the navbar icon: chat, cart, userProfile, notification
  const [isClicked, setIsClicked] = useState(initialState);
  // (nothing has clicked at the beginning)

  // 3- handle function: later we add step by step
  // which element has clicked:
  const handleClick = (clicked) => {
    // we can't write setIsClicked(clicked) because setisClicked is an obj and clicked is a string
    // so we will use spread operator to copy the state and then change the value of the clicked element
    setIsClicked({ ...initialState, [clicked]: true });
  };

  //4- for mobile view: menu is closed in mobile view
  const [sceernSize, setScreenSize] = useState(undefined);

  //5- for theme: dark and light(themesetting)
  const [currentColor, setCurrentColor] = useState("#03c9d7");
  const [currentMode, setCurrentMode] = useState("light");

  //6- for changing the mode: dark and light:
  const setMode = (e) => {
    setCurrentMode(e.target.value);
    // also update the local storage:
    localStorage.setItem("themeMode", e.target.value);
  };

  //7- for changing the color:
  const setColor = (e) => {
    setCurrentColor(e.target.value);
    // also update the local storage:
    localStorage.setItem("colorMode", e.target.value);
  };

  return (
    // the value is an obj:
    // 1-1: we can pass that state over the value:
    // 1-2: open and close the menu: setActiveMenu

    <StateContext.Provider
      value={{
        activeMenu,
        setActiveMenu,
        isClicked,
        setIsClicked,
        handleClick,
        sceernSize,
        setScreenSize,
        currentColor,
        setCurrentColor,
        currentMode,
        setCurrentMode,
      }}
    >
      {/* we always return children: */}
      {children}
    </StateContext.Provider>
  );
};

// how we can use that activeMenu in our sidebar or app component:
export const useStateContext = () => useContext(StateContext);
// we say:
// hey give me the DATA from the 'useStateContext' by using 'useContext'
// thet we specified in the 'StateContext' and we will use it in our 'Sidebar' component:
