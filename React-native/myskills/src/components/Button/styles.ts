import styled from 'styled-components/native';

export const Container = styled.TouchableOpacity`
    width: 100%;
    background-color: ${({theme}) => theme.colors.primary };
    padding: 15px;
    align-items: center;
    border-radius: 7px;
    margin-top: 20px;
`;

export const Text = styled.Text`
    color: ${({theme}) => theme.colors.text_light };
    font-size: 17px;
    font-weight: bold;
`;