import React, { useEffect, useState } from 'react';
// import { Text } from 'react-native';
import PropTypes from 'prop-types';
import api from '~/services/api';

import Background from '~/components/Background';

import { formatDataOrder } from '~/util';

import {
    NameOrder,
    List,
    Item,
    ItemDesc,
    TextProblem,
    ItemDate,
    DateProblem,
    NotProblem,
    Text,
} from './styles';

const ViewProblem = ({ route }) => {
    const { id } = route.params;
    const [problems, setProblems] = useState([]);

    useEffect(() => {
        async function loadProblems() {
            const { data } = await api.get(`/delivery/${id}/problems`);
            setProblems(data.problems);
        }
        console.tron.log(problems.length);
        loadProblems();
    }, []);

    return (
        <Background>
            <>
                <NameOrder>Encomenda {id}</NameOrder>
                {problems.length <= 0 ? (
                    <NotProblem>
                        <Text> Não existe problemas relatados</Text>
                    </NotProblem>
                ) : (
                    <List
                        data={problems}
                        keyExtractor={(item) => String(item.id)}
                        renderItem={({ item }) => (
                            <Item>
                                <ItemDesc>
                                    <TextProblem>
                                        {item.description}
                                    </TextProblem>
                                </ItemDesc>
                                <ItemDate>
                                    <DateProblem>
                                        {formatDataOrder(item.createdAt)}
                                    </DateProblem>
                                </ItemDate>
                            </Item>
                        )}
                        keyExtractor={(item) => String(item.id)}
                    />
                )}
            </>
        </Background>
    );
};

export default ViewProblem;

ViewProblem.propTypes = {
    route: PropTypes.shape({
        params: PropTypes.shape({
            id: PropTypes.number,
        }),
    }).isRequired,
};
