import React from 'react';

import Icon from 'react-native-vector-icons/MaterialIcons';

import { statusFormatedOrder, formatDataOrder } from '~/util';

import {
    Container,
    TitleBlock,
    Title,
    InfDelivery,
    Label,
    Value,
    DivBlock,
    BlockDatas,
    BlockButtons,
    Button,
    ButtonText,
} from './styles';

import Background from '~/components/Background';

export default function DetailsOrder({ navigation, route }) {
    const { order } = route.params;

    return (
        <Background>
            <Container>
                <>
                    <DivBlock>
                        <TitleBlock>
                            <Icon
                                name="local-shipping"
                                size={30}
                                color="#7d40e7"
                            />
                            <Title>Informações da entrega</Title>
                        </TitleBlock>

                        <InfDelivery>
                            <Label>DESTINATÁRIO</Label>
                            <Value>{order.Recipient.name}</Value>
                        </InfDelivery>

                        <InfDelivery>
                            <Label>ENDEREÇO DE ENTREGA</Label>
                            <Value>{`${order.Recipient.street}, ${order.Recipient.number}, ${order.Recipient.city} - ${order.Recipient.state}, ${order.Recipient.cep}`}</Value>
                        </InfDelivery>

                        <InfDelivery>
                            <Label>PRODUTO</Label>
                            <Value>Produto Teste</Value>
                        </InfDelivery>
                    </DivBlock>
                    <DivBlock>
                        <TitleBlock>
                            <Icon name="event" size={30} color="#7d40e7" />
                            <Title>Situação da entrega</Title>
                        </TitleBlock>

                        <InfDelivery>
                            <Label>STATUS</Label>
                            <Value>{statusFormatedOrder(order.status)}</Value>
                        </InfDelivery>

                        <BlockDatas>
                            <InfDelivery>
                                <Label>DATA DE RETIRADA</Label>
                                <Value>
                                    {formatDataOrder(order.start_date)}
                                </Value>
                            </InfDelivery>

                            <InfDelivery>
                                <Label>DATA DE ENTREGA</Label>
                                <Value>{formatDataOrder(order.end_date)}</Value>
                            </InfDelivery>
                        </BlockDatas>
                    </DivBlock>
                    <BlockButtons>
                        <Button>
                            <Icon
                                name="highlight-off"
                                size={30}
                                color="#E74040"
                            />
                            <ButtonText>Informar Problema</ButtonText>
                        </Button>
                        <Button>
                            <Icon
                                name="info-outline"
                                size={30}
                                color="#E7BA40"
                            />
                            <ButtonText>Visualizar Problemas</ButtonText>
                        </Button>
                        <Button>
                            <Icon
                                name="check-circle"
                                size={30}
                                color="#7d40e7"
                            />
                            <ButtonText>Confirmar Entrega</ButtonText>
                        </Button>
                    </BlockButtons>
                </>
            </Container>
        </Background>
    );
}
