//
// theme.ts
// figures
// 
// Author: Wess Cope (me@wess.io)
// Created: 06/16/2021
// 
// Copywrite (c) 2021 Wess.io
//

import {
  extendTheme, 
  ThemeConfig, 
  ColorMode
} from '@chakra-ui/react';

import Color from './color';

const theme = {
  fonts: {
    heading: "'Barlow', sans-serif",
    avatar: "'Barlow', sans-serif",
    body: "'Lato', sans-serif",
  },
  styles: {
    global: (props) => ({
      body: {
        bg: props.colorMode === "light" ? "#fafafa" : '#212121',
        color: props.colorMode === "light" ? Color.polar[0] : Color.snow[1],
      },
      nav: {
        bg: props.colorMode === "light" ? "#F6F8FC" : '#3a3a3a',
      },
      ".landing-nav" : {
        borderBottom: `1px solid ${props.colorMode === "light" ? '#e0e0e0' : '#0f0f0f'}`,
      },
      ".dashboard-nav" : {
        borderRight: `1px solid ${props.colorMode === "light" ? '#e0e0e0' : '#0f0f0f'}`,
        margin: '0 !important',
        overflow: 'hidden !important',
      },
      ".nav-active": {
        color:  props.colorMode === "light" ? `black !important` : `white !important`,
        borderLeft: `2px solid !important`,
        borderRadius: '0 !important',
        height: '44px !important',
        marginLeft: '-2px !important',
      },
      ".nav-option": {
        color:  props.colorMode === "light" ? `rgba(0, 0, 0, 0.25) !important` : `rgba(255, 255, 255, 0.25) !important`,
        height: '44px !important',
      },
      ".branding" : {
        color: props.colorMode === "light" ? Color.polar[0] : Color.snow[0],
      },
      ".project-list": {
        backgroundColor: props.colorMode === "light" ? '#fff' : '#232323',
        borderRight: `1px solid ${props.colorMode === "light" ? '#f0f0f0' : '#1d1d1d'}`,
      },
      ".project-list-header": {
        backgroundColor: props.colorMode === "light" ? '#fafafa' : '#151515',
      },
      ".project-list-item": {
        borderBottom: `1px solid ${props.colorMode === "light" ? '#f9f9f9' : '#151515'}`,
      },
      ".filepond--drop-label": {
        backgroundColor: props.colorMode === "light" ? '#fff !important' : '#2f2f2f !important',
        borderWidth: '1px',
        borderColor: props.colorMode === "light" ? "#a0a0a0 !important" : "#0f0f0f !important",
        borderRadius: '6px'
      },
      ".quill": {
        backgroundColor: props.colorMode === "light" ? '#fff !important' : '#2f2f2f !important',
        borderWidth: '1px',
        borderColor: props.colorMode === "light" ? "#a0a0a0 !important" : "#0f0f0f !important",
        borderRadius: '8px'
      },
      ".editor-area": {
        borderColor: props.colorMode === "light" ? "#a0a0a0 !important" : "#0f0f0f !important",
        borderRadius: '8px'
      },
      ".ql-editor": {
        borderColor: props.colorMode === "light" ? "#a0a0a0 !important" : "#0f0f0f !important",
        borderRadius: '8px'
      },
      ".ql-editor.ql-blank::before": {
        color: props.colorMode === "light" ? "#A7B3C5" : "#686768",
        fontStyle: 'normal',
        fontSize: '15px',
      }
    })
  },
  components: {
    Divider: {
      baseStyle: ({colorMode}) => ({
        borderColor: colorMode === 'light' ? '#afafaf' : '#0f0f0f'
      })
    },
    Input: {
      baseStyle: ({colorMode}) => {
        return {field: {
          bg: colorMode === "light" ? "#fff" : "#2f2f2f",
          borderColor: colorMode === "light" ? "#e0e0e0" : "#0f0f0f",
          borderWidth: 1,
          ':focus': {
            bg: colorMode === "light" ? "#fff" : "#2f2f2f",
            borderColor: colorMode === "light" ? "#a0a0a0" : "#0f0f0f",
            }
        }}
      },
      variants: {},
    }
  }
};


const config:ThemeConfig = {
  initialColorMode: "light",
  useSystemColorMode: false,
};

export default extendTheme({config, ...theme});

