import styled from 'styled-components/native';
import { TouchableOpacity } from 'react-native';

import Button from '~/components/Button';

export const Container = styled.View`
    flex: 1;
    justify-content: center;
    align-items: center;
    padding: 0 30px;
    background: #fff;
`;

export const Information = styled.View`
    width: 100%;
    margin-top: 15px;
`;

export const Label = styled.Text`
    color: #666;
    font-size: 12px;
`;

export const Text = styled.Text`
    color: #444444;
    font-size: 22px;
    font-weight: bold;
`;

export const ImageProfile = styled.Image`
    width: 160px;
    height: 160px;
    border-radius: 80px;
    margin-bottom: 20px;
`;

export const ButtonLogout = styled(Button)`
    background: #e74040;
    width: 100%;
    margin-top: 15px;
`;

export const ContainerButton = styled(TouchableOpacity)`
    width: 100%;
`;
