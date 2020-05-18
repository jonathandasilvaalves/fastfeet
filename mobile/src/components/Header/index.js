import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Icon from 'react-native-vector-icons/MaterialIcons';

import { Request } from '~/store/modules/orders/actions';

import photo_unavailable from '~/assets/sem_foto.png';

import {
    Container,
    HeaderPage,
    Profile,
    ImageProfile,
    Welcome,
    WelTest,
    ProfileName,
    IconLogout,
    HeaderList,
    TitleHeader,
    OptionList,
    Option,
    OptionText,
} from './styles';

export default function Header({ navigation: { navigate } }) {
    const dispatch = useDispatch();
    const { status } = useSelector((state) => state.orders);
    const profile = useSelector((state) => state.user.profile);

    function handleOrders(value) {
        dispatch(Request(profile.id, value));
    }
    function handleLogout() {
        navigate('Profile');
    }

    return (
        <Container>
            <HeaderPage>
                <Profile>
                    {profile && profile.DeliverymanFile ? (
                        <ImageProfile
                            source={{ uri: profile.DeliverymanFile.url }}
                        />
                    ) : (
                        <ImageProfile source={photo_unavailable} />
                    )}

                    <Welcome>
                        <WelTest>Bem vindo de volta,</WelTest>
                        <ProfileName>{profile.name}</ProfileName>
                    </Welcome>
                </Profile>

                <IconLogout onPress={() => handleLogout()}>
                    <Icon name="exit-to-app" size={24} color="#ff0000" />
                </IconLogout>
            </HeaderPage>

            <HeaderList>
                <TitleHeader>Entregas</TitleHeader>

                <OptionList>
                    <Option onPress={() => handleOrders('pedding')}>
                        <OptionText active={status === 'pedding'}>
                            Pendentes
                        </OptionText>
                    </Option>
                    <Option onPress={() => handleOrders('done')}>
                        <OptionText active={status === 'done'}>
                            Entregues
                        </OptionText>
                    </Option>
                </OptionList>
            </HeaderList>
        </Container>
    );
}
