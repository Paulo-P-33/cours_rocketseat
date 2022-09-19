import styled from 'styled-components/native';

export const Container = styled.TouchableOpacity`
    background-color: ${
        ({theme}) => theme.colors.background_dark_grey 
    };
    padding: 15px;
    border-radius: 50px;
    align-items: center;
`;

export const Text = styled.Text`
    color: ${({theme}) => theme.colors.text_light};
    font-size: 22px;
    font-weight: bold;
`;