import React from 'react';
import { TextInputProps } from 'react-native';

import { 
    Container,
    Input,
} from './styles';

type Props = TextInputProps;

export function InputField({...rest}: Props){
    return(
        <Container>
            <Input {...rest}></Input>
        </Container>
    )
}