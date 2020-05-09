import React, { useMemo } from 'react';

import { StatusBar, Button } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';

import { format, parseISO } from 'date-fns';
import pt from 'date-fns/locale/pt';
import { singOut } from '~/store/modules/auth/actions';

import {
    Container,
    ImageProfile,
    Information,
    Label,
    Text,
    ButtonLogout,
} from './styles';

export default function Profile() {
    const dispatch = useDispatch();
    const profile = useSelector((state) => state.user.profile);

    const dateFormated = useMemo(
        () =>
            format(parseISO(profile.created_at), 'dd/MM/yyyy', { locale: pt }),
        [profile]
    );

    function handleLogout() {
        alert('You tapped the button!');
        dispatch(singOut());
    }

    return (
        <>
            <StatusBar barStyle="dark-content" backgroundColor="#fff" />
            <Container>
                <ImageProfile source="https://api.adorable.io/avatars/66/abott@adorable.png" />
                <Information>
                    <Label>Nome completo</Label>
                    <Text>{profile.name}</Text>
                </Information>
                <Information>
                    <Label>E-mail</Label>
                    <Text>{profile.email}</Text>
                </Information>
                <Information>
                    <Label>Data de cadastro</Label>
                    <Text>{dateFormated}</Text>
                </Information>

                <Button
                    onPress={() => {
                        handleLogout();
                    }}
                    title="Press Me"
                />
                <ButtonLogout
                    onPress={() => {
                        handleLogout();
                    }}
                >
                    Texte 2
                </ButtonLogout>
            </Container>
        </>
    );
}
