//
// index.ts
// blackgate
// 
// Author: Wess Cope (me@wess.io)
// Created: 10/08/2021
// 
// Copywrite (c) 2021 Wess.io
//

import {extendTheme, ThemeConfig} from '@chakra-ui/react';
import Color from './colors';

const theme = {
  fonts: {
    heading: "'Barlow', sans-serif",
    avatar: "'Barlow', sans-serif",
    body: "'Lato', sans-serif",
  },
  styles: {
    global: (props) => ({
      body: {
        bg: props.colorMode === "light" ? Color.nord.snow[1] : '#212121',
        color: props.colorMode === "light" ? Color.nord.polar[0] : Color.nord.snow[1],
      },
      nav: {
        bg: props.colorMode === "light" ? Color.nord.snow[2] : '#3a3a3a'
      },
      ".branding" : {
        color: props.colorMode === "light" ? Color.nord.polar[0] : Color.nord.snow[0],
      }
    })
  }  
};

const config:ThemeConfig = {
  initialColorMode: "light",
  useSystemColorMode: true,
};

export default extendTheme({config, ...theme});

