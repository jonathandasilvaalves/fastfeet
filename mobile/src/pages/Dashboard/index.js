import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { StatusBar } from 'react-native';

import Header from '~/components/Header';
import Delivery from '~/components/Delivery';
import { Container, List } from './styles';

import { Request } from '~/store/modules/orders/actions';

export default function Dashboard() {
    const dispatch = useDispatch();
    const profile = useSelector((state) => state.user.profile);
    const { deliveries } = useSelector((state) => state.orders);

    useEffect(() => {
        dispatch(Request(profile.id));
    }, []);

    return (
        <>
            <StatusBar barStyle="dark-content" backgroundColor="#fff" />
            <Container>
                <List
                    ListHeaderComponent={<Header name={profile.name} />}
                    data={deliveries}
                    renderItem={({ item }) => (
                        <Delivery item={item} date={item.createdAt} />
                    )}
                    keyExtractor={(item) => String(item.id)}
                />
            </Container>
        </>
    );
}