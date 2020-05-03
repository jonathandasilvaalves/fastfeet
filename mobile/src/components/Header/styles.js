import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';

export const Container = styled.View`
    background: #fff;
`;

export const HeaderPage = styled.View`
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
`;

export const Profile = styled.View`
    flex-direction: row;
    align-items: center;
`;

export const ImageProfile = styled.Image`
    width: 80px;
    height: 80px;
    border-radius: 40px;
`;

export const Welcome = styled.View`
    padding-left: 20px;
`;

export const WelTest = styled.Text`
    color: #a8a8a8;
`;

export const ProfileName = styled.Text`
    color: #444444;
    font-size: 20px;
    font-weight: bold;
`;

export const IconLogout = styled(RectButton)``;

export const HeaderList = styled.View`
    flex-direction: row;
    justify-content: space-between;
    padding-top: 20px;
`;

export const TitleHeader = styled.Text`
    color: #444444;
    font-size: 22px;
    font-weight: bold;
`;

export const OptionList = styled.View`
    flex-direction: row;
    align-items: flex-end;
`;

export const Option = styled(RectButton)`
    margin-left: 12px;
`;

export const OptionText = styled.Text`
    color: #7d40e7;
    font-size: 14px;
    text-decoration: none;
`;
