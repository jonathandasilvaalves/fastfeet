import React, { useMemo } from 'react';

import { StatusBar } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';

import { format, parseISO } from 'date-fns';
import pt from 'date-fns/locale/pt';
import { singOut } from '~/store/modules/auth/actions';

import photo_unavailable from '~/assets/sem_foto.png';

import {
    Container,
    ImageProfile,
    Information,
    Label,
    Text,
    ButtonLogout,
    ContainerButton,
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
        dispatch(singOut());
    }

    return (
        <>
            <StatusBar barStyle="dark-content" backgroundColor="#fff" />
            <Container>
                {profile && profile.DeliverymanFile ? (
                    <ImageProfile
                        source={{ uri: profile.DeliverymanFile.url }}
                    />
                ) : (
                    <ImageProfile source={photo_unavailable} />
                )}

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
                <ContainerButton onPress={handleLogout}>
                    <ButtonLogout>Logout</ButtonLogout>
                </ContainerButton>
            </Container>
        </>
    );
}
