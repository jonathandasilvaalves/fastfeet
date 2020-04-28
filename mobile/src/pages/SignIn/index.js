import React, { useState } from 'react';
import { Image, StatusBar } from 'react-native';
import { useDispatch } from 'react-redux';

import logo from '~/assets/logo.png';

import { Container, Form, FormInput, SubmitButton } from './styles';
import { signInRequest } from '~/store/modules/auth/actions';

export default function SignIn() {
    const dispatch = useDispatch();
    const [id, setId] = useState('');

    function handleSubmit() {
        dispatch(signInRequest(id));
    }

    return (
        <>
            <StatusBar barStyle="light-content" backgroundColor="#7D40E7" />
            <Container>
                <Image source={logo} />
                <Form>
                    <FormInput
                        name="id"
                        icon="mail-outline"
                        keyboardType="numeric"
                        autoCorrect={false}
                        placeholder="Informe seu ID de cadastro"
                        autoCapitalize="none"
                        returnKeyType="send"
                        value={id}
                        onSubmitEditing={handleSubmit}
                        onChangeText={setId}
                    />
                    <SubmitButton onPress={handleSubmit}>
                        Entrar no Sistema
                    </SubmitButton>
                </Form>
            </Container>
        </>
    );
}
