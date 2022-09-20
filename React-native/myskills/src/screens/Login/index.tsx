import React from 'react';
import { Button } from '../../components/Form/Button';
import { ButtonsSocialMedia } from '../../components/Form/ButtonsSocialMedia';
import { InputField } from '../../components/Form/InputField';

import {
    Container, 
    Header, 
    Title,
    Inputs,
    Buttons,
    LoginSocial,
} from './styles';


export function Login() {
    return (
        <Container>
            <Header> 
                <Title>LOGIN DE TESTE</Title>
            </Header>
            <Inputs>
                <InputField
                    placeholder="E-mail"
                    placeholderTextColor='#555'
                />
                <InputField
                    placeholder="Login"
                    placeholderTextColor='#555'
                />
            </Inputs>

            <Buttons>
                <LoginSocial>
                    <ButtonsSocialMedia title='Google'/>
                    <ButtonsSocialMedia title='Facebook'/>
                </LoginSocial>

                <Button title='Login'></Button>
            </Buttons>
        </Container>
    )
}