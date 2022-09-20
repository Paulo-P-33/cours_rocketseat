import styled from 'styled-components/native';

export const Container = styled.View`
    flex: 1;
    padding: 30px;
    background-color: ${({theme}) => theme.colors.background_dark};
`;

export const Header = styled.View`
    justify-content:center;
    align-items: center;
    margin-top: 50%;
`;

export const Title = styled.Text`
    color: ${({theme}) => theme.colors.text_light};
    font-size: 24px;
    font-weight: bold;
    margin-bottom: 30px;
`;


export const Inputs = styled.View`
    
`;

export const Buttons = styled.View`

`;

export const LoginSocial = styled.View`
    width: 100%;
    
    flex-direction: row;
    justify-content: space-between;
`;
