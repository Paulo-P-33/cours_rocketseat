import React, { useState } from 'react';
import {Modal} from 'react-native';

import { Button } from '../../components/Form/Button';
import { Input } from '../../components/Form/Input';
import { CategorySelectButton } from '../../components/Form/CategorySelectButton';
import { TranscationTypeButton } from '../../components/Form/TransactionTypeButton';
import { CategorySelect } from '../CategorySelect';
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
    const [categoryModalOpen, setCategoryModalOpen] = useState(false);

    const [category, setCategory] = useState({
        key: 'category',
        name: 'Categoria'
    });
    
    function handleTransactionsTypeSelect(type: 'up' | 'down'){
        setTransactionType(type);
    }

    function handleOpenSelectCategoryModal(){
        setCategoryModalOpen(true);
    }

    function handleCloseSelectCategoryModal(){
        setCategoryModalOpen(false);
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

                <CategorySelectButton 
                title='Categoria'
                onPress={handleOpenSelectCategoryModal}
                />
            </Fields>

            <Button title='Enviar'/>
        </Form>

        <Modal visible={categoryModalOpen}>
            <CategorySelect 
                category={category}
                setCategory={setCategory}
                closeSelectCategory={handleCloseSelectCategoryModal}
            />
        </Modal>

    </Container>)
}