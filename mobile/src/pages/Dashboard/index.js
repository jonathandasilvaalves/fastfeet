import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { StatusBar } from 'react-native';

import api from '~/services/api';

import Header from '~/components/Header';
import Delivery from '~/components/Delivery';
import { Container, List } from './styles';

export default function Dashboard() {
    const profile = useSelector((state) => state.user.profile);

    const [deliveryman, setDeliveryman] = useState(profile);
    const [orders, setOrders] = useState({});

    useEffect(() => {
        async function handleLoadOrders() {
            if (deliveryman.id) {
                const { data } = await api.get(
                    `deliveryman/${profile.id}/deliveries`
                );
                setOrders(data.orders);
                console.tron.log(orders);
            }
        }
        handleLoadOrders();
    }, [deliveryman]);

    return (
        <>
            <StatusBar barStyle="dark-content" backgroundColor="#fff" />
            <Container>
                <List
                    ListHeaderComponent={<Header name={profile.name} />}
                    data={orders}
                    renderItem={({ item }) => (
                        <Delivery item={item} date={item.createdAt} />
                    )}
                    keyExtractor={(item) => String(item.id)}
                />
            </Container>
        </>
    );
}
