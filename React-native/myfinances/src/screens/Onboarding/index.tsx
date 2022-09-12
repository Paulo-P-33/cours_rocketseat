import { NavigationContainer } from '@react-navigation/native';
import React, { useState } from 'react';
import AppIntoSlider from 'react-native-app-intro-slider';


import { AppRoutes } from '../../routes/app.routes';
import { SlideProps, slides } from '../../utils/onboardingData';
import { Container, Description, Header, Title, Body, Button } from './styles';

import theme from '../../global/styles/theme';



export function Onboarding(){
    const [showSlide, setShowSlide] = useState(false);

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

    if(showSlide){
        return(
             <NavigationContainer>
                <AppRoutes/>
            </NavigationContainer> 
        )
    }
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
                setShowSlide(true)
                return(
                    <AppRoutes/>
                )
            }}
        />
        
    )
}