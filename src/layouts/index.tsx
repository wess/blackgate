//
// index.tsx
// asylum
// 
// Author: Wess Cope (me@wess.io)
// Created: 11/01/2021
// 
// Copywrite (c) 2021 Wess.io
//

import React from 'react';

import Landing from './landing';
import User from './user';

import {useSession} from '~/providers/session';

// const Layout = ({session, children, ...props}) => (session == null ? <Landing {...props}>{children}</Landing> : <User {...props}>{children}</User>);

const Layout = ({children, ...props}) => {
  const {session,} = useSession();

  return session == null 
  ? <Landing {...props}>{children}</Landing> 
  : <User {...props}>{children}</User>
  ;
}

export default Layout;
