import React from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';

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

export default function Header({ name }) {
    return (
        <Container>
            <HeaderPage>
                <Profile>
                    <ImageProfile source="https://api.adorable.io/avatars/66/abott@adorable.png" />
                    <Welcome>
                        <WelTest>Bem vindo de volta,</WelTest>
                        <ProfileName>{name}</ProfileName>
                    </Welcome>
                </Profile>

                <IconLogout>
                    <Icon name="exit-to-app" size={24} color="#ff0000" />
                </IconLogout>
            </HeaderPage>

            <HeaderList>
                <TitleHeader>Entregas</TitleHeader>

                <OptionList>
                    <Option>
                        <OptionText>Pendentes</OptionText>
                    </Option>
                    <Option>
                        <OptionText>Entregues</OptionText>
                    </Option>
                </OptionList>
            </HeaderList>
        </Container>
    );
}
