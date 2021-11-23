//
// session.tsx
// asylum
// 
// Author: Wess Cope (me@wess.io)
// Created: 11/17/2021
// 
// Copywrite (c) 2021 Wess.io
//

import React from 'react';
import Data from '../data';

export type Session = {
  id:string;
  userId:string;
  expire:number;
  provider:string;
  providerUid:string;
  providerToken:string;
  current:boolean;
};


const Context = React.createContext({
  session:null,
  setSession:(session:Session | null) => {}
});

const {Provider} = Context;

export const SessionProvider = ({children}) => {
  const [session, setSession_] = React.useState<Session | null>(Data.get('session'));

  const setSession = (session:Session | null) => {
    if(session === null) {
      Data.delete('session');
    } else {
      Data.set('session', session);
    }

    setSession_(session);
  }

  return <Provider value={{session, setSession}}>{children}</Provider>
}

export const useSession = () => React.useContext(Context);
