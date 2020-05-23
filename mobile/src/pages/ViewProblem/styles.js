import styled from 'styled-components/native';

export const NameOrder = styled.Text`
    color: #fff;
    align-content: center;
    font-weight: bold;
    font-size: 20px;
    text-align: center;
`;

export const List = styled.FlatList.attrs({
    showVerticalScrollIndicator: true,
    contentContainerStyle: { paddingTop: 7 },
})`
    flex: 1;
    background: #fff;
    margin: 0 16px;
    border-radius: 4px;
    border: 1px solid #00000000;
`;

export const Item = styled.View`
    flex-direction: row;
    border: 1px solid #eee;
    padding: 20px;
    margin-bottom: 4px;
`;
export const ItemDesc = styled.View`
    flex: 2;
`;
export const TextProblem = styled.Text`
    color: #444444;
`;
export const ItemDate = styled.View``;
export const DateProblem = styled.Text`
    color: #666;
`;

export const NotProblem = styled.View`
    background: #fff;
    margin: 0 16px;
    border-radius: 4px;
    padding: 20px;
`;

export const Text = styled.Text`
    font-size: 16px;
    text-align: center;
    font-weight: bold;
`;
