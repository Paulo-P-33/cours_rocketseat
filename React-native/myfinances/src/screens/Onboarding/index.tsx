import { NavigationContainer } from '@react-navigation/native';
import React, { useEffect, useState } from 'react';
import AppIntoSlider from 'react-native-app-intro-slider';
import AsyncStorage from '@react-native-async-storage/async-storage';
import * as SplashScreen from 'expo-splash-screen';

import { AppRoutes } from '../../routes/app.routes';
import { SlideProps, slides } from '../../utils/onboardingData';
import { Container, Description, Header, Title, Body, Button } from './styles';

import theme from '../../global/styles/theme';
import { boolean } from 'yup';
import App from '../../../App';

const dataKey = '@myfinances:onboarding';

SplashScreen.preventAutoHideAsync();

export function Onboarding(){
    const [showOnboarding, setShowOnboarding] = useState(false);
    
    function renderSlides({item}: SlideProps){
        return(
            <Container>
                    <Header>
                        <Title>{item.title}</Title>
                    </Header>
                    
                    <Body>
                        <Description>{item.description}</Description>
                    </Body>
                    
            </Container>
        )
    }

    async function activeOnboarding (active: boolean){
        await AsyncStorage.setItem(dataKey, JSON.stringify(active));
    }
    
    if(showOnboarding){
        return(
            <NavigationContainer>
                <AppRoutes/>
            </NavigationContainer> 
        )
    }
    
    SplashScreen.hideAsync();
    return(
        <AppIntoSlider
            data={slides}
            renderItem={renderSlides}
            activeDotStyle={{
                backgroundColor: theme.colors.secondary,
                width: 15
            }}
            bottomButton={true}
            showSkipButton={true}
            showPrevButton={true}
            renderNextButton={() => <Button typeButton={'Próximo'}>Proximo</Button>}
            renderPrevButton={() => <Button typeButton={'Voltar'}>Voltar</Button>}
            renderSkipButton={() => <Button typeButton={'Pular'}>Pular</Button>}
            renderDoneButton={() => <Button typeButton={'Feito'}>Feito!</Button>}
            onDone={() => {
                activeOnboarding(true);
                setShowOnboarding(true);
                return(
                    <NavigationContainer>
                        <AppRoutes/>
                    </NavigationContainer> 
                )
            }}
        />
    )
}