//
// index.tsx
// asylum
// 
// Author: Wess Cope (me@wess.io)
// Created: 11/17/2021
// 
// Copywrite (c) 2021 Wess.io
//

import React, { useEffect } from 'react';

import {
  Routes,
  useLocation,
} from 'react-router-dom';


import { useNav } from '../providers/nav';

const Router = ({children}) => {
  const {pathname} = useLocation();
  const {nav, setNav} = useNav();

  useEffect(() => {
    if(nav.toLowerCase() !== pathname.toLowerCase()) {
      setNav(pathname);
    }  
  });

  return (
    <Routes>
      {children}
    </Routes>        
  );
}

export default Router;
