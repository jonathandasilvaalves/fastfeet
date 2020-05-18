import React from 'react';
import { StatusBar } from 'react-native';

import { Container, Header, Body } from './styles';

export default function Background({ children }) {
    return (
        <>
            <StatusBar barStyle="light-content" backgroundColor="#7d40e7" />
            <Container>
                <Header />
                <Body>{children}</Body>
            </Container>
        </>
    );
}
