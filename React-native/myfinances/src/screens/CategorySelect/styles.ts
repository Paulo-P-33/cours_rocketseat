import { RFValue } from 'react-native-responsive-fontsize';
import Styled from 'styled-components/native';

import { Feather } from '@expo/vector-icons';

export const Container = Styled.View`
    flex: 1;
    background-color: ${({ theme }) => theme.colors.background};
`;

export const Header = Styled.View`
    width: 100%;
    height: ${RFValue(113)}px;

    background-color: ${({ theme }) => theme.colors.primary};

    align-items: center;
    justify-content: flex-end;
    padding-bottom: 19px;
`;

export const  Title = Styled.Text`
    font-family: ${({ theme }) => theme.fonts.regular};
    font-size: ${RFValue(18)}px;
    color: ${({ theme }) => theme.colors.shape};
`;

export const Category = Styled.View`
    width: 100%;
    padding: ${RFValue(15)}px;

    flex-direction: row;
    align-items: center;
`;

export const Icon = Styled(Feather)`
    font-size: ${RFValue(14)}px;
    margin-right: 16px;
`;

export const Name = Styled.Text`
    font-family: ${({theme}) => theme.fonts.regular};
    font-size: ${RFValue(14)}px;
`;

export const Separator = Styled.View`
    height: 1px;
    width: 100%;
    background-color: ${({ theme }) => theme.colors.text};
`;

export const Footer = Styled.View`
    width: 100%;
    padding: 24px;
`;
