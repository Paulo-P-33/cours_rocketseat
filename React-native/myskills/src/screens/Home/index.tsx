import React, {useState, useEffect} from 'react';
import { FlatList } from 'react-native';
import { Button } from '../../components/Button';
import { SkillCard } from '../../components/SkillCard';
import { 
    Container,
    Title,
    InputField,
    Greeting
} from './styles';

interface SkillData {
    id: string;
    name: string;
}

export function Home() {
    const [newSkill, setNewSkill] = useState('');
    const [mySkills, setMySkills] = useState<SkillData[]>([]);
    const [greeting, setGreeting] = useState('');

    function handleAddNewSkill (){
        const data = {
            id: String(new Date().getTime()),
            name: newSkill
        }
        {console.log("add skill")}
        setMySkills([...mySkills, data]);
    }

    function handleRemoveNewSkill(id: string) {
        {console.log("removi skill")}
        setMySkills(oldState => oldState.filter(
            skill => skill.id !== id
        ));
    }
    
    useEffect(() => {
        const currentHour = new Date().getHours();
        if(currentHour < 12) {
            setGreeting('Good Morning');
        }
        else if( currentHour >= 12 && currentHour < 18){
            setGreeting('Good Afternoon');
        }
        else {
            setGreeting('Good Night');
        }
    }, [])

    return (
        <Container>
            <Title>Welcome, Luiz Paulo</Title>
            
            <Greeting>
                {greeting}
            </Greeting>

            <InputField
                placeholder="New Skill"
                placeholderTextColor='#555'
                onChangeText={setNewSkill}
            />
            
           <Button onPress={handleAddNewSkill} title="add"/>
            
            <Title style={[{marginVertical: 50}]}>
                My Skills
            </Title>

            <FlatList
                data={mySkills}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => {
                    return (
                        <SkillCard skill={item.name} onPress={() => handleRemoveNewSkill(item.id)}/>
                    )
                }}
            />  
                
        </Container>
  );
}
