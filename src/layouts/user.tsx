//
// user.tsx
// asylum
// 
// Author: Wess Cope (me@wess.io)
// Created: 11/01/2021
// 
// Copywrite (c) 2021 Wess.io
//
import React from 'react';

import {
  HStack,
  VStack,
  Box
} from '@chakra-ui/react';

import Flash from '~/providers/flash';
import Nav from '~/components/nav/user';

import ThemeSwitcher from '~/theme';

const App = ({children}) => {
  return (
    <HStack flex={1} h='100vh' align='flex-start' isInline spacing={0}>
      <Nav/>

      <VStack h='100%' align='flex-start' flex={1} p={0} m={0}>
        <Flash.Component/>

        <Box flex={1} w="100%" maxHeight="100%">
          {children}
        </Box>
      </VStack>
    </HStack>
  );
}

export default App;