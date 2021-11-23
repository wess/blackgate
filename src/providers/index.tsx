//
// index.tsx
// asylum
// 
// Author: Wess Cope (me@wess.io)
// Created: 11/17/2021
// 
// Copywrite (c) 2021 Wess.io
//

import React from 'react';
import ApiProvider from './api';
import {SessionProvider} from './session';
import {NavProvider} from './nav';
import {FlashProvider} from './flash';

export {
  FlashProvider,
  SessionProvider,
}

const standardProviders = [
  ApiProvider,
  SessionProvider,
  NavProvider,
  FlashProvider,
];

const childUp = (child, parent = null) => {
  if(!parent) { return child; }

  let Top = parent;

  return <Top>{child}</Top>
}

const MultiProvider = ({providers, ...props}) => {
  let combined = [...standardProviders, ...providers];
  let parent = null;
  let Final = null;

  for(let i = 0; i < combined.length; i++) {
    const provider = combined[i];

    Final = childUp(provider, parent);
    parent = provider; 
  }

  return <Final {...props} />
}

export default (props) => (
  <MultiProvider {...props}/>
);

