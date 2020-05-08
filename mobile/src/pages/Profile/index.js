import React from 'react';
import { StatusBar } from 'react-native';

import {
    Container,
    ImageProfile,
    Information,
    Label,
    Text,
    ButtonLogout,
} from './styles';

export default function Profile() {
    return (
        <>
            <StatusBar barStyle="dark-content" backgroundColor="#fff" />
            <Container>
                <ImageProfile source="https://api.adorable.io/avatars/66/abott@adorable.png" />
                <Information>
                    <Label>Nome completo</Label>
                    <Text>Jonathan Alves</Text>
                </Information>
                <Information>
                    <Label>E-mail</Label>
                    <Text>jonathansilvaalves16@gmail.com</Text>
                </Information>
                <Information>
                    <Label>Data de cadastro</Label>
                    <Text>17/10/2020</Text>
                </Information>

                <ButtonLogout onPress={() => {}}>Logout</ButtonLogout>
            </Container>
        </>
    );
}
