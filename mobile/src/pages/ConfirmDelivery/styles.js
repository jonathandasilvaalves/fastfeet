import styled from 'styled-components/native';

import Button from '~/components/Button';

export const Container = styled.View`
    flex: 1;
    background: #fff;
    margin: 0 16px;
    border-radius: 4px;
`;

export const Submit = styled(Button)`
    margin-top: 10px;
    background: #7d40e7;
`;

export const ButtonCamera = styled(Button)``;

export const SelectImage = styled.TouchableOpacity`
    flex: 1;
    justify-content: center;
`;
export const Image = styled.Image`
    flex: 1;
`;
export const SelectImageText = styled.Text`
    text-align: center;
    font-weight: bold;
    font-size: 18px;
    color: #999;
`;
