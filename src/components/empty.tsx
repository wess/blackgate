//
// empty.tsx
// blackgate
// 
// Author: Wess Cope (me@wess.io)
// Created: 11/08/2021
// 
// Copywrite (c) 2021 Wess.io
//

import React from 'react';

import {
  Box,
  HStack,
  VStack,
  Heading
} from '@chakra-ui/react';

const empty = ({icon, message}) => {
  const Icon = icon;

  return (
    <HStack w='full' h='100%'>
      <VStack w='full' spacing={4} px={4}>
        <Box opacity={0.4}>{<Icon size='44px'/>}</Box>
        <Box>
          {
            typeof message === 'string' 
            ? <Heading fontSize="22px" textAlign='center' opacity={0.4}>{message}</Heading>
            : message
          }
          
        </Box>
      </VStack>
    </HStack>
  );
}

export default empty;