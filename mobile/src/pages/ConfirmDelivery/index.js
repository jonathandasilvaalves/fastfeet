import React, { useState } from 'react';
import { Alert } from 'react-native';
import {
    Container,
    Submit,
    ButtonCamera,
    SelectImage,
    Image,
    SelectImageText,
} from './styles';

import Background from '~/components/Background';
import Camera from '~/components/Camera';

import api from '~/services/api';

const ConfirmDelivery = ({ route, navigation }) => {
    const { id } = route.params;

    const [image, setImage] = useState();
    const [openCamera, setOpenCamera] = useState(false);

    async function handleOpen() {
        setOpenCamera(true);
    }
    function handleLongPress() {
        Alert.alert(
            'Remoção imagem',
            'Deseja remover essa imagem',
            [
                {
                    text: 'Não',
                },
                { text: 'Sim', onPress: () => setImage() },
            ],
            { cancelable: false }
        );
    }
    async function handleSubmit() {}

    return (
        <Background>
            {!openCamera ? (
                <Container>
                    <SelectImage
                        onPress={handleOpen}
                        onLongPress={image && handleLongPress}
                    >
                        {image ? (
                            <Image source={{ uri: image }} />
                        ) : (
                            <SelectImageText>
                                Selecionar uma imagem
                            </SelectImageText>
                        )}
                    </SelectImage>
                    <ButtonCamera onPress={handleSubmit}>Enviar</ButtonCamera>
                </Container>
            ) : (
                <Container>
                    <Camera
                        selectImage={setImage}
                        closeCamera={() => setOpenCamera(false)}
                    />
                </Container>
            )}
        </Background>
    );
};

export default ConfirmDelivery;
