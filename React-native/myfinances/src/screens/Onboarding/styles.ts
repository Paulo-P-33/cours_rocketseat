import { RFPercentage, RFValue } from 'react-native-responsive-fontsize';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import Styled from 'styled-components/native';



interface ColorButtonProps {
    typeButton: 'Próximo' | 'Voltar' | 'Pular' | 'Feito';
}

export const Container = Styled.View`
    flex: 1;
    background-color: ${({theme}) => theme.colors.background}; 
    
`;

export const Header = Styled.View`
    width: 100%;
    height: ${RFValue(150)}px;

    background-color: ${({ theme }) => theme.colors.secondary};

    align-items: center;
    justify-content: flex-end;
    padding-bottom: 19px;
`;

export const Title = Styled.Text`
    font-family: ${({ theme }) => theme.fonts.regular};
    font-size: ${RFValue(18)}px;
    color: ${({ theme }) => theme.colors.shape};
`;

export const Body = Styled.View`
    width: 100%;
    height: ${RFPercentage(50)}px;

    align-items: center;
    justify-content: center;
`;

export const Description = Styled.Text`
    font-family: ${({ theme }) => theme.fonts.regular};
    font-size: ${RFValue(18)}px;
    color: ${({ theme }) => theme.colors.text};
    
    padding: ${RFValue(20)}px;
`;


export const Button = Styled.Text<ColorButtonProps>`
    background-color: ${({theme, typeButton}) => 
    typeButton === 'Próximo' || typeButton === 'Feito' ? theme.colors.secondary: theme.colors.primary};

    margin: 10px ;
    padding: 18px;
    border-radius: 5px;

    text-align: center;
    
    font-family: ${({theme}) => theme.fonts.medium};
    font-size: ${RFValue(14)}px;

    color: ${({theme}) => theme.colors.shape};
`;