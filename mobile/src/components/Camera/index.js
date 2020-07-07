import React, { useState } from 'react';
import PropTypes from 'prop-types';

import {
    Container,
    Camera as RNCamera,
    Header,
    Footer,
    IconButtonTop,
    Icon,
    IconButton,
} from './styles';

const Camera = ({ selectImage, closeCamera }) => {
    const [flashMode, setFlashMode] = useState(false);

    async function takePicture(camera) {
        const options = { quality: 0.5, base64: true };
        const data = await camera.takePictureAsync(options);
        selectImage(data.uri);
        closeCamera();
    }

    return (
        <RNCamera
            type={RNCamera.Constants.Type.back}
            flashMode={
                flashMode
                    ? RNCamera.Constants.FlashMode.on
                    : RNCamera.Constants.FlashMode.off
            }
            androidRecordAudioPermissionOptions={{
                title: 'Permission to use audio recording',
                message: 'We need your permission to use your audio',
                buttonPositive: 'Ok',
                buttonNegative: 'Cancel',
            }}
            androidCameraPermissionOptions={{
                title: 'Permission to use camera',
                message: 'We need your permission to use your camera',
                buttonPositive: 'Ok',
                buttonNegative: 'Cancel',
            }}
        >
            {({ camera, status }) => {
                return (
                    <Container>
                        <Header>
                            <IconButtonTop
                                onPress={() => setFlashMode((value) => !value)}
                            >
                                <Icon
                                    name={flashMode ? 'flash-on' : 'flash-off'}
                                    size={30}
                                    color="#fff"
                                />
                            </IconButtonTop>
                            <IconButtonTop onPress={() => closeCamera()}>
                                <Icon name="close" size={30} color="#fff" />
                            </IconButtonTop>
                        </Header>
                        <Footer>
                            <IconButton
                                onPress={() => takePicture(camera)}
                                disabled={status !== 'READY'}
                            >
                                <Icon
                                    name="photo-camera"
                                    size={50}
                                    color="#fff"
                                />
                            </IconButton>
                        </Footer>
                    </Container>
                );
            }}
        </RNCamera>
    );
};

export default Camera;

Camera.propTypes = {
    selectImage: PropTypes.func.isRequired,
    closeCamera: PropTypes.func.isRequired,
};
