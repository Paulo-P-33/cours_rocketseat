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
  const [noActiveOnboarding, setNoActiveOnboarding] = useState(false);
  const [appIsReady, setAppIsReady] = useState(false);
  
  
  useEffect(() => {
    async function loadOnboarding(){
      try {
        const statusOnboarding = await AsyncStorage.getItem(dataKey!);
        const attActiveOnboarding = JSON.parse(statusOnboarding!)
        setNoActiveOnboarding(attActiveOnboarding);
      } catch (error) {
        console.log(error)
      } finally {
        setAppIsReady(true)
      }
    }
    loadOnboarding();
  },[]);

  const onLayoutRootView = useCallback(async () => {
    if (appIsReady) {
      await SplashScreen.hideAsync();
    }
  }, [appIsReady]);


  if(!fontsLoeaded || !appIsReady){
    return null;
  }

  if(!noActiveOnboarding){
    return (
      <ThemeProvider theme={theme} >
        <Onboarding />
      </ThemeProvider>
    ) 
  }
  return (
    <ThemeProvider theme={theme}>
      <NavigationContainer onReady={onLayoutRootView}>
          <AppRoutes/>
      </NavigationContainer>
    </ThemeProvider>
  );
}


