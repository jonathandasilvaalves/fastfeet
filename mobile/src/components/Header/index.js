import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Icon from 'react-native-vector-icons/MaterialIcons';

import { Request } from '~/store/modules/orders/actions';

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

export default function Header() {
    const dispatch = useDispatch();
    const { status } = useSelector((state) => state.orders);
    const profile = useSelector((state) => state.user.profile);

    function handleOrders(value) {
        dispatch(Request(profile.id, value));
    }

    return (
        <Container>
            <HeaderPage>
                <Profile>
                    <ImageProfile source="https://api.adorable.io/avatars/66/abott@adorable.png" />
                    <Welcome>
                        <WelTest>Bem vindo de volta,</WelTest>
                        <ProfileName>{profile.name}</ProfileName>
                    </Welcome>
                </Profile>

                <IconLogout>
                    <Icon name="exit-to-app" size={24} color="#ff0000" />
                </IconLogout>
            </HeaderPage>

            <HeaderList>
                <TitleHeader>Entregas</TitleHeader>

                <OptionList>
                    <Option onPress={() => handleOrders('progress')}>
                        <OptionText active={status === 'progress'}>
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
