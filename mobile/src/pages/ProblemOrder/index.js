import React, { useRef, useState } from 'react';
import { Alert } from 'react-native';
import { Form } from '@unform/mobile';
import * as Yup from 'yup';

import { Container, InputForm, Submit } from './styles';

import Background from '~/components/Background';
import api from '~/services/api';

const schema = Yup.object().shape({
    description: Yup.string().required().min(10).max(60),
});

const ProblemOrder = ({ route, navigation }) => {
    const { id } = route.params;
    const [problem, setProblem] = useState('');
    const formRef = useRef(null);

    async function handleSubmit() {
        try {
            await schema.validate(problem, {
                abortEarly: false,
            });

            await api.post('/delivery/problems', {
                delivery_id: id,
                description: problem,
            });
            setProblem('');
            Alert.alert('Problema reportado com sucesso!');
        } catch (err) {
            navigation.navigate('Dashboard');
            Alert.alert('Ocorreu um problema no registro, tente mais tarde!');
        }
    }

    return (
        <Background>
            <Container>
                <Form ref={formRef}>
                    <InputForm
                        name="description"
                        autoCorrect={false}
                        placeholder="Inclua aqui o problema que ocorreu na entrega."
                        autoCapitalize="none"
                        returnKeyType="send"
                        multiline
                        value={problem}
                        onChangeText={setProblem}
                        onSubmitEditing={handleSubmit}
                    />
                    <Submit
                        onPress={() => {
                            handleSubmit();
                        }}
                    >
                        Enviar
                    </Submit>
                </Form>
            </Container>
        </Background>
    );
};

export default ProblemOrder;
