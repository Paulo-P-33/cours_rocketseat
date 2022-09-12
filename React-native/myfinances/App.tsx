import React from 'react';
import {ThemeProvider} from 'styled-components';

import * as SplashScreen from 'expo-splash-screen';
import {useFonts, Poppins_400Regular, Poppins_500Medium, Poppins_700Bold} from '@expo-google-fonts/poppins';

import theme from './src/global/styles/theme';

import { NavigationContainer } from '@react-navigation/native';
import {AppRoutes} from './src/routes/app.routes';
import { Onboarding } from './src/screens/Onboarding';


SplashScreen.preventAutoHideAsync();

export default function App() {
  const [fontsLoeaded] = useFonts({Poppins_400Regular, Poppins_500Medium, Poppins_700Bold});
  
  if(!fontsLoeaded){
    return null;
  }

  SplashScreen.hideAsync();

  return (
    <ThemeProvider theme={theme}>
      <Onboarding/>
    </ThemeProvider>
  );
}


