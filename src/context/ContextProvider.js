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
export const contextProvider = ({ children }) => {
  // lets add all states and logics we have: in our context:
  // 1- the state:
  const [activeMenu, setActiveMenu] = useState(true);

  const [state, setState] = useState(initialState);
  return (
    // the value is an obj:
    // 1-1: we can pass that state over the value:

    <StateContext.Provider
      value={{
        activeMenu,
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
