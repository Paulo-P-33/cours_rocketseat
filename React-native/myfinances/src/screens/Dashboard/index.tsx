import React from 'react';
import { Container, Header, UserWrapper, UserName, UserInfo, User, UserGreeting, Photo, Icon} from './styles';


export function Dashboard() {
    return (
        <Container>
            <Header>
                <UserWrapper>
                    <UserInfo>
                        <Photo source={{ uri:'https://avatars.githubusercontent.com/u/74207343?v=4'} }/>
                        <User>
                            <UserGreeting>Olá, </UserGreeting>
                            <UserName>Luiz</UserName>
                        </User>
                    </UserInfo>
                    <Icon name="power"/>
                </UserWrapper>
            </Header>
        </Container>
    )
}
