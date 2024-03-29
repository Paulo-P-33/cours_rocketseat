import React from 'react';
import { StatusBar } from 'react-native';
import {Home} from './src/screens/Home';
import {Login} from './src/screens/Login';
import {ThemeProvider} from 'styled-components';

import theme from './src/global/styles/theme';

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <StatusBar barStyle={'light-content'}/>
        <Login/>
      {/* <Home/> */}
    </ThemeProvider>
  )
}
