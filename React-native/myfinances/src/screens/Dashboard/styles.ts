import Styled from 'styled-components/native';
import { FlatList, FlatListProps } from 'react-native'
import {Feather} from '@expo/vector-icons';
import { RFPercentage, RFValue } from 'react-native-responsive-fontsize';

import { DataListProps } from '.';

export const Container = Styled.View`
    flex: 1;
    background-color: ${({theme}) => theme.colors.background};
`;

export const Header = Styled.View`
    width: 100%;
    height: ${RFPercentage(42)}px;
    
    background-color: ${({theme}) => theme.colors.primary};
    
    justify-content: center;
    align-items: flex-start;
    flex-direction: row;
`;

export const UserWrapper = Styled.View`
    width: 100%;

    padding: 0 24px;
    margin-top: ${RFValue(40)}px;

    flex-direction: row;
    justify-content: space-between;
    align-items: center;
`;

export const UserInfo = Styled.View`
    flex-direction: row;
    align-items: center;
`;

export const Photo = Styled.Image`
    width: ${RFValue(48)}px;
    height: ${RFValue(48)}px;

    border-radius: 10px;
`;

export const User = Styled.View`
    margin-left: 17px;
`;

export const UserGreeting = Styled.Text`
    color: ${({theme}) => theme.colors.shape};

    font-size: ${RFValue(18)}px;
    font-family: ${({theme}) => theme.fonts.regular};
`;

export const UserName = Styled.Text`
    color: ${({theme}) => theme.colors.shape};

    font-size: ${RFValue(18)}px;
    font-family: ${({theme}) => theme.fonts.bold};
`;

export const Icon = Styled(Feather)`
    color: ${({theme}) => theme.colors.secondary};
    font-size: ${RFValue(24)}px;
`;

export const HighlightCards = Styled.ScrollView.attrs({
    horizontal: true ,
    showsHorizontalScrollIndicator: false,
    contentContainerStyle: { paddingHorizontal: 24 }
})`
    width: 100%;

    position: absolute;
    margin-top: ${RFPercentage(20)}px;
`;

export const Transactions = Styled.View`
    flex: 1%;
    padding: 0 24px;

    margin-top: ${RFPercentage(12)}px;
`;

export const Title = Styled.Text`
    font-size: ${RFValue(18)}px;
    font-family: ${({theme}) => theme.fonts.regular};

    margin-bottom: 16px;
`;

export const TransactionList = Styled(
    FlatList as new (props: FlatListProps<DataListProps>) => FlatList<DataListProps>
    ).attrs({
    showsVerticalScrollIndicator: false,
})``;