//
// index.tsx
// asylum
// 
// Author: Wess Cope (me@wess.io)
// Created: 10/21/2021
// 
// Copywrite (c) 2021 Wess.io
//

import React from 'react';

import {
  useColorMode,
  useColorModeValue,
  IconButton,
} from "@chakra-ui/react"

import { FaMoon, FaSun } from "react-icons/fa"

const ThemeSwitcher = (props) => {
  const { toggleColorMode } = useColorMode()
  const text = useColorModeValue("dark", "light")
  const SwitchIcon = useColorModeValue(FaMoon, FaSun)

  return (
    <IconButton
      size="md"
      fontSize="lg"
      variant="ghost"
      color="current"
      marginLeft="2"
      onClick={toggleColorMode}
      icon={<SwitchIcon />}
      aria-label={`Switch to ${text} mode`}
      {...props}
    />
  )
}

export default ThemeSwitcher;

export {default as Theme} from './theme';
export {default as Nord} from './color';