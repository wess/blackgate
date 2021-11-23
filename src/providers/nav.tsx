//
// nav.tsx
// asylum
// 
// Author: Wess Cope (me@wess.io)
// Created: 11/18/2021
// 
// Copywrite (c) 2021 Wess.io
//

import React from 'react';
import Data from '../data';

const Context = React.createContext({
  nav: '/',
  setNav:(nav:string) => {}
});

const {Provider} = Context;

export const NavProvider = ({children}) => {
  const [nav, setNav_] = React.useState(Data.get('nav'));

  const setNav = (nav:string) => {
    setNav_(nav);
    Data.set('nav', nav);
  }

  return (
    <Provider value={{nav, setNav}}>
      {children}
    </Provider>
  )
};

export const useNav = () => React.useContext(Context);