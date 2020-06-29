import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { StatusBar } from 'react-native';
import PropTypes from 'prop-types';

import Header from '~/components/Header';
import Delivery from '~/components/Delivery';
import { Container, List } from './styles';

import { Request } from '~/store/modules/orders/actions';

export default function Dashboard({ navigation }) {
    const dispatch = useDispatch();
    const profile = useSelector((state) => state.user.profile);
    const { deliveries, status, page } = useSelector((state) => state.orders);

    useEffect(() => {
        dispatch(Request(profile.id));
    }, []);

    function loadOrder() {
        dispatch(Request(profile.id, status, page + 1, deliveries));
    }

    return (
        <>
            <StatusBar barStyle="dark-content" backgroundColor="#fff" />
            <Container>
                <List
                    ListHeaderComponent={<Header navigation={navigation} />}
                    data={deliveries}
                    onEndReachedThreshold={0.4}
                    onEndReached={loadOrder}
                    renderItem={({ item }) => (
                        <Delivery
                            item={item}
                            date={item.createdAt}
                            navigation={navigation}
                        />
                    )}
                    keyExtractor={(item) => String(item.id)}
                />
            </Container>
        </>
    );
}
