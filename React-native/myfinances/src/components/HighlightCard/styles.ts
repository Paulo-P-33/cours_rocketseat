import Styled from 'styled-components/native';
import {RFPercentage, RFValue} from 'react-native-responsive-fontsize';
import { Feather} from '@expo/vector-icons';

export const Container = Styled.View`
    background-color: ${({theme}) => theme.colors.shape};

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

export const Title = Styled.Text`
    font-family: ${({theme}) => theme.fonts.regular};
    font-size: ${RFValue(14)}px;

    color: ${({theme}) => theme.colors.text_dark};
`;

export const Icon = Styled(Feather)`
    font-size: ${RFValue(40)}px;
`;

export const Footer = Styled.View``;

export const Amount = Styled.Text`
    font-family: ${({theme}) => theme.fonts.medium};
    font-size: ${RFValue(32)}px;

    color: ${({theme}) => theme.colors.text_dark};
    margin-top: 38px;
`;

export const LastTransaction = Styled.Text`
    font-family: ${({theme}) => theme.fonts.regular};
    font-size: ${RFValue(12)}px;

    color: ${({theme}) => theme.colors.text};
`;