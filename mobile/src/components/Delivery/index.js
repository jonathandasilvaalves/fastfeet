import React, { useMemo } from 'react';
import { format, parseISO } from 'date-fns';
import pt from 'date-fns/locale/pt';
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

export default function Delivery({ item, date }) {
    const dateFormated = useMemo(
        () => format(parseISO(date), 'dd/MM/yyyy', { locale: pt }),
        [date]
    );

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
                    <ButtonMoreDetails onPress={() => {}}>
                        <TextButtonDetails>Ver detalhes</TextButtonDetails>
                    </ButtonMoreDetails>
                </ViewDetails>
            </Details>
        </Container>
    );
}
