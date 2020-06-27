import styled from 'styled-components/native';

import TextInput from '~/components/TextInput';
import Button from '~/components/Button';

export const Container = styled.View`
    flex: 1;
    background: #fff;
    margin: 0 16px;
    border-radius: 4px;
`;

export const InputForm = styled(TextInput)`
    background: #fff;
    padding: 0 50px;
`;

export const Submit = styled(Button)`
    margin-top: 10px;
    background: #7d40e7;
`;
