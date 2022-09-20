import React from 'react';
import {TouchableOpacityProps} from 'react-native';


import {
    Container,
    Text,
} from './styles';

interface Props extends TouchableOpacityProps{
    title: string;
}

export function ButtonsSocialMedia({title, ...rest}: Props){
    return (
        <Container {...rest}>
            <Text>{title}</Text>
        </Container>
    )
}