import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { Alert } from 'react-native';
import {
    Container,
    ButtonCamera,
    SelectImage,
    Image,
    SelectImageText,
} from './styles';

import Background from '~/components/Background';
import Camera from '~/components/Camera';

import api from '~/services/api';

const ConfirmDelivery = ({ route, navigation }) => {
    const { id } = useSelector((state) => state.user.profile);
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
    async function handleSubmit() {
        const params = {};
        try {
            const data = new FormData();
            data.append('file', {
                type: 'image/jpg',
                uri: image,
                name: 'confdelivery.jpg',
            });

            const response = await api.post('signature', data);
            params.signature_id = response.data.id;

            await api.put(`deliveryman/order`, {
                id: route.params.id,
                deliveryman_id: id,
                end_date: new Date(),
                signature_id: 1,
            });

            Alert.alert('Entrega confirmada!');
        } catch (error) {
            Alert.alert('Erro no registro', error);
        }
    }

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
