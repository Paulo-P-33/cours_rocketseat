import Styled, {css} from 'styled-components/native';
import {RFValue} from 'react-native-responsive-fontsize';
import { Feather} from '@expo/vector-icons';

interface TypeProps {
    type: 'up' | 'down' | 'total';
}

export const Container = Styled.View<TypeProps>`
    background-color: ${({theme, type}) => 
    type === 'total' ? theme.colors.secondary : theme.colors.shape
    };

    width: ${RFValue(300)}px;
    border-radius: 5px;

    padding: 19px 23px;
    padding-bottom: ${RFValue(42)}px;
    margin-right: 16px; 

`;

export const Header = Styled.View`
    flex-direction: row;
    justify-content: space-between;
`;

export const Title = Styled.Text<TypeProps>`
    font-family: ${({theme}) => theme.fonts.regular};
    font-size: ${RFValue(14)}px;

    color: ${({theme, type}) => 
    type === 'total' ? theme.colors.shape: theme.colors.text_dark
    };
`;

export const Icon = Styled(Feather)<TypeProps>`
    font-size: ${RFValue(40)}px;

    ${({type}) => type === 'up' && css`
        color: ${({theme}) => theme.colors.success}
    `};

    ${({type}) => type === 'down' && css`
        color: ${({theme}) => theme.colors.attention}
    `};

    ${({type}) => type === 'total' && css`
        color: ${({theme}) => theme.colors.shape};
    `};
`;

export const Footer = Styled.View``;

export const Amount = Styled.Text<TypeProps>`
    font-family: ${({theme}) => theme.fonts.medium};
    font-size: ${RFValue(32)}px;

    color: ${({theme, type}) => 
    type === 'total' ? theme.colors.shape: theme.colors.text_dark
    };
    margin-top: 38px;
`;

export const LastTransaction = Styled.Text<TypeProps>`
    font-family: ${({theme}) => theme.fonts.regular};
    font-size: ${RFValue(12)}px;

    color: ${({theme, type}) => 
    type === 'total' ? theme.colors.shape: theme.colors.text
    };

`;