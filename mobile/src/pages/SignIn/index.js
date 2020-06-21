import React, { useState, useEffect } from 'react';
import { Image, StatusBar } from 'react-native';
import { useDispatch } from 'react-redux';

import logo from '~/assets/logo.png';

import { Container, Form, FormInput, SubmitButton, Welcome } from './styles';
import { signInRequest } from '~/store/modules/auth/actions';

export default function SignIn() {
    const dispatch = useDispatch();
    const [id, setId] = useState('');
    const [loading, setLoading] = useState(true);

    function handleSubmit() {
        dispatch(signInRequest(id));
    }

    function loadindPage() {
        setTimeout(() => {
            setLoading(false);
        }, 3000);
    }

    useEffect(() => {
        loadindPage();
    }, [loading]);

    return (
        <>
            <StatusBar barStyle="light-content" backgroundColor="#7D40E7" />
            {loading ? (
                <Container>
                    <Image source={logo} />
                    <Welcome>BEM-VINDO NOVAMENTE!</Welcome>
                </Container>
            ) : (
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
            )}
        </>
    );
}
