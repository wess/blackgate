//
// api.tsx
// asylum
// 
// Author: Wess Cope (me@wess.io)
// Created: 11/17/2021
// 
// Copywrite (c) 2021 Wess.io
//

import React from 'react';
import {Appwrite} from 'appwrite';

const PROJECT_ID = '6176c470a8cc0';
const ENDPOINT = 'https://api.devpipe.com/v1';

const context = React.createContext(null);
const {Provider} = context;

const Component = ({children}) => {
  const a = new Appwrite();
  
  a.setEndpoint(ENDPOINT)
   .setProject(PROJECT_ID);

  const [api,] = React.useState<Appwrite>(a);


  return <Provider value={api}>{children}</Provider>
}

export const useApi = () => React.useContext(context);

export default Component;