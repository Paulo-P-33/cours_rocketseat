import styled from 'styled-components/native';

export const Container = styled.View`
    flex: 1;
    background-color: ${({theme}) => theme.colors.background_dark};
    padding: 70px 30px;
`;

export const Title = styled.Text`
    color: ${({theme}) => theme.colors.text_light};
    font-size: 24px;
    font-weight: bold;
`;

export const InputField = styled.TextInput`
    background-color: ${
    ({theme}) => theme.colors.background_dark_grey
    };
    color: ${({theme}) => theme.colors.text_light};
    font-size: 18px;
    padding: 15px;
    margin-top: 30px;
    border-radius: 7px;
`;

export const Greeting = styled.Text`
    color: ${({theme}) => theme.colors.text_light};
`;