import React, {useState, useEffect} from 'react';
import {View, Text, StyleSheet, TextInput, FlatList} from 'react-native';
import { Button } from './components/Button';
import { SkillCard } from './components/SkillCard';

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
        <View style={styles.container}>
            <Text style={styles.title}>Welcome, Luiz Paulo</Text>
            
            <Text style={styles.greeting}>
                {greeting}
            </Text>

            <TextInput 
                style={styles.input}
                placeholder="New Skill"
                placeholderTextColor='#555'
                onChangeText={setNewSkill}
            />
            
           <Button onPress={handleAddNewSkill} title="add"/>
            
            <Text style={[styles.title, {marginVertical: 50}]}>
                My Skills
            </Text>

            <FlatList
                data={mySkills}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => {
                    return (
                        <SkillCard skill={item.name} onPress={() => handleRemoveNewSkill(item.id)}/>
                    )
                }}
            />  
                
        </View>
  );
}

const styles = StyleSheet.create({
    container: {
        flex: 1, 
        backgroundColor: '#121015',   
        paddingHorizontal: 30,
        paddingVertical: 70,
    },
    title: {
        color: '#FFFFFF',
        fontSize: 24,
        fontWeight: 'bold'
    },
    input: {
        backgroundColor: '#1F1E25',
        color: '#FFFFFF',
        fontSize: 18,
        padding: 15,
        marginTop: 30,
        borderRadius: 7
    },
    greeting: {
        color: '#FFFFFF'
    }
})