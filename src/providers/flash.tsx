//
// flash.tsx
// asylum
// 
// Author: Wess Cope (me@wess.io)
// Created: 11/16/2021
// 
// Copywrite (c) 2021 Wess.io
//

import React from 'react';

import {
  Box,
  Alert,
  AlertIcon,
  AlertTitle,
  AlertDescription,
  CloseButton
} from '@chakra-ui/react';

export enum FlashType {
  Success = 'success',
  Error = 'error',
  Info = 'info',
  Warning = 'warning',
}

export type FlashMessage = {
  type:FlashType,
  message:string
};

const Context = React.createContext({
  flash: null,
  setFlash:(message:FlashMessage) => {}
});

const {Provider} = Context;

export const FlashProvider = ({children})  => {
  const [flash, setFlash] = React.useState<FlashMessage | null>(null);

  return (
    <Provider value={{flash, setFlash}}>{children}</Provider>
  );
}

export const useFlash = () => React.useContext(Context);

const Component = (_props) => {
  const {flash, setFlash} = useFlash();

  if(flash !== null) {
    setTimeout(() => {
      setFlash(null);
    }, 5000);
  }

  return (
    <>
      {flash && (
          <Alert 
          variant="subtle"
          status={flash.type}
          shadow="md"
          style={{position:'fixed', top:-8, left:0, right:0, zIndex:9999}}
        >
          <AlertIcon />
          
          <Box w={4}/>
      
          <Box flex={1}>
            <AlertDescription>
              {flash.message}
            </AlertDescription>
          </Box>
    
          <CloseButton 
            position="absolute" 
            right="8px" 
            top="8px" 
            onClick={() => setFlash(null)} 
          />
        </Alert>
      )}
    </>
 );
}



const msg = (type:FlashType, message:string) => ({
  type,
  message
});

const messages = {
  success: (message:string) => msg(FlashType.Success, message),
  error: (message:string) => msg(FlashType.Error, message),
  info: (message:string) => msg(FlashType.Info, message),
  warning: (message:string) => msg(FlashType.Warning, message)
}

export default {
  Component,
  Provider,
  ...messages
}