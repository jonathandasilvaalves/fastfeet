import React, { forwardRef } from 'react';

import { Container } from './styles';

const TextInput = ({ ...rest }, ref) => {
    return <Container {...rest} ref={ref} />;
};

export default forwardRef(TextInput);
