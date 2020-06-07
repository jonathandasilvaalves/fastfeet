import React, { useMemo } from 'react';
import { format, parseISO } from 'date-fns';
import PropTypes from 'prop-types';
import pt from 'date-fns/locale/pt';
import { CommonActions } from '@react-navigation/native';
import {
    Container,
    HeaderTitle,
    Icon,
    Title,
    Details,
    ViewDetails,
    Label,
    Data,
    ButtonMoreDetails,
    TextButtonDetails,
} from './styles';

import TimeLine from './TimeLine';

export default function Delivery({ item, date, navigation }) {
    const dateFormated = useMemo(
        () => format(parseISO(date), 'dd/MM/yyyy', { locale: pt }),
        [date]
    );

    function handlePress(order) {
        // navigation.dispatch(
        //   CommonActions.navigate({
        //     name: 'Details',
        //   params: {
        //     id: delivery_id,
        // },
        // })
        // );
        navigation.navigate('Details', {
            order,
        });
    }

    return (
        <Container>
            <HeaderTitle>
                <Icon name="local-shipping" size={25} color="#7149c1" />
                <Title>Encomenda {item.id}</Title>
            </HeaderTitle>
            <TimeLine status={item.status} />
            <Details>
                <ViewDetails>
                    <Label>Data</Label>
                    <Data>{dateFormated}</Data>
                </ViewDetails>
                <ViewDetails>
                    <Label>Cidade</Label>
                    <Data>{item.Recipient.city}</Data>
                </ViewDetails>
                <ViewDetails>
                    <ButtonMoreDetails
                        onPress={() => {
                            handlePress(item);
                        }}
                    >
                        <TextButtonDetails>Ver detalhes</TextButtonDetails>
                    </ButtonMoreDetails>
                </ViewDetails>
            </Details>
        </Container>
    );
}

Delivery.propTypes = {
    item: PropTypes.shape().isRequired,
    date: PropTypes.string.isRequired,
};
