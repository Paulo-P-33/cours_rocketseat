import React from 'react';
import { TouchableOpacityProps } from 'react-native';
import { Container, Text } from './styles';

interface SkillCardProps extends TouchableOpacityProps {
    skill: string;
}

export function SkillCard({skill, ...rest}: SkillCardProps) {
    return (
        <Container {...rest}>
            <Text>{skill}</Text>
        </Container>
    )
}
