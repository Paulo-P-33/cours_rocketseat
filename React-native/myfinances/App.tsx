import React, { useCallback, useEffect, useState } from 'react';
import {ThemeProvider} from 'styled-components';

import * as SplashScreen from 'expo-splash-screen';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {useFonts, Poppins_400Regular, Poppins_500Medium, Poppins_700Bold} from '@expo-google-fonts/poppins';

import theme from './src/global/styles/theme';

import { NavigationContainer } from '@react-navigation/native';
import {AppRoutes} from './src/routes/app.routes';
import { Onboarding } from './src/screens/Onboarding';

const dataKey = '@myfinances:onboarding';

SplashScreen.preventAutoHideAsync();

export default function App() {
  const [fontsLoeaded] = useFonts({Poppins_400Regular, Poppins_500Medium, Poppins_700Bold});
  const [viewOnboarding, setViewOnboarding] = useState(false);
  const [appIsReady, setAppIsReady] = useState(false);
  
  
  useEffect(() => {
    async function loadOnboarding(){
      const statusOnboarding = await AsyncStorage.getItem(dataKey!);
      const activeOnboarding = JSON.parse(statusOnboarding!)
      setViewOnboarding(activeOnboarding);
    }
    
    loadOnboarding();
  },[]);

  SplashScreen.hideAsync();
  
  if(!fontsLoeaded){
    return null;
  }
  
  if(!viewOnboarding){
    return (
      <ThemeProvider theme={theme} >
        <Onboarding />
      </ThemeProvider>
    )
  }
  return (
    <ThemeProvider theme={theme}>
      <NavigationContainer>
          <AppRoutes/>
      </NavigationContainer>
    </ThemeProvider>
  );
}


