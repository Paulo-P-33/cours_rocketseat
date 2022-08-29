import Styled from 'styled-components/native';

export const Container = Styled.View`
    flex: 1;
    align-items: center;
    justify-content: center;
    background-color: ${({theme}) => theme.colors.background};
`;

export const Title = Styled.Text`
    font-family: ${({theme}) => theme.fonts.bold};
    color: ${({theme}) => theme.colors.title} ;
    font-size: 30px;
`;