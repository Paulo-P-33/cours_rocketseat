import styled from 'styled-components/native';

export const Container = styled.View`
    width: 100%;
`;

export const Input = styled.TextInput`
    background-color: ${
    ({theme}) => theme.colors.background_dark_grey
    };
    color: ${({theme}) => theme.colors.text_light};
    font-size: 18px;
    padding: 15px;
    margin-top: 10px;
    border-radius: 7px;
`;