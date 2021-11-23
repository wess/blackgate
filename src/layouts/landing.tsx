//
// landing.tsx
// asylum
// 
// Author: Wess Cope (me@wess.io)
// Created: 11/01/2021
// 
// Copywrite (c) 2021 Wess.io
//

import React from 'react';

import {
  VStack,
  Box
} from '@chakra-ui/react';

import Nav from '~/components/nav/landing';
import Flash from '~/providers/flash';

const App = ({children}) => {
  return (
    <VStack w='100%' h='100vh' align='flex-start'>
      <Nav/>

      <Flash.Component/>

      <Box w="100%" flex={1}>
        {children}
      </Box>
    </VStack>
  );
}

export default App;