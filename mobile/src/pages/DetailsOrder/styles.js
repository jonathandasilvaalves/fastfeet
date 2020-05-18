import styled from 'styled-components/native';
import { TouchableOpacity } from 'react-native';

export const Container = styled.ScrollView`
    background: #fff;
    margin: 0 16px;
    border-radius: 4px;
`;

export const TitleBlock = styled.View`
    padding: 10px;
    flex-direction: row;
    align-items: center;
`;

export const Card = styled.View`
    padding: 10px 10px 15px;
`;

export const Label = styled.Text`
    color: #999;
    font-size: 16px;
    font-weight: bold;
`;

export const Value = styled.Text`
    color: #666;
    font-size: 16px;
`;

export const Title = styled.Text`
    color: #7d40e7;
    margin-left: 8px;
    font-size: 16px;
    font-weight: bold;
`;

export const InfDelivery = styled.View`
    padding: 10px 10px 15px;
`;

export const DivBlock = styled.View`
    border: 1px solid #e4e4e4;
    margin-bottom: 2%;
`;

export const BlockDatas = styled.View`
    flex-direction: row;
    justify-content: space-between;
`;

export const BlockButtons = styled.View`
    flex-direction: row;
`;
export const Button = styled(TouchableOpacity)`
    flex: 1;
    justify-content: center;
    align-items: center;
    border: 1px solid #999;
    border-radius: 5px;
`;
export const ButtonText = styled.Text`
    text-align: center;
    font-size: 14px;
`;
