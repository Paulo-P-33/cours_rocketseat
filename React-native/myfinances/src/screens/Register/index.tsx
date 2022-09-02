import React, { useState } from 'react';
import {Modal} from 'react-native';

import { Button } from '../../components/Form/Button';
import { CategorySelectButton } from '../../components/Form/CategorySelectButton';
import { Input } from '../../components/Form/Input';
import { TranscationTypeButton } from '../../components/Form/TransactionTypeButton';
import { 
    Container, 
    Header,
    Title,
    Form,
    Fields,
    TransactionsTypes,
} from './styles';


export function Register(){
    const [TransactionType, setTransactionType] = useState('');
    
    function handleTransactionsTypeSelect(type: 'up' | 'down'){
        setTransactionType(type);
    }

    return( 
    <Container>
        <Header>
            <Title>Cadastro</Title>
        </Header>

        <Form>
            <Fields>
                <Input
                    placeholder='Nome'
                />

                <Input
                    placeholder='Preço'
                />

                <TransactionsTypes>
                    <TranscationTypeButton
                        type='up'
                        title='Income'
                        isActive={TransactionType === 'up'} 
                        onPress={() => handleTransactionsTypeSelect('up')}
                    />

                    <TranscationTypeButton
                        type='down'
                        title='Outome'
                        isActive={TransactionType === 'down'}  
                        onPress={() => handleTransactionsTypeSelect('down')}
                    />
                </TransactionsTypes>

                <CategorySelectButton title='Categoria'/>
            </Fields>

            <Button title='Enviar'/>
        </Form>
    </Container>)
}