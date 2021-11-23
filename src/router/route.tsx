//
// route.tsx
// asylum
// 
// Author: Wess Cope (me@wess.io)
// Created: 11/17/2021
// 
// Copywrite (c) 2021 Wess.io
//

import React from 'react';

import {
  Route,
  Navigate,
  useLocation
} from 'react-router-dom';

import {useSession} from '~/providers/session';

export const AuthRoute = ({children}) => {
  const location = useLocation();
  const {session} = useSession();

  return session === null
  ? <Navigate to="/onboarding" state={{from: location}} />
  : children;
}