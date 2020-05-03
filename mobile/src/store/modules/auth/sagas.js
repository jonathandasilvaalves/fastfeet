import { Alert } from 'react-native';
import { all, call, put, takeLatest } from 'redux-saga/effects';

import api from '~/services/api';

import { signInSuccess, signInFailure } from './actions';

export function* signIn({ payload }) {
    try {
        const { id } = payload;
        const { data } = yield call(api.get, `/deliveryman/session/${id}`);

        yield put(signInSuccess(data.deliveryman));
    } catch (err) {
        Alert.alert('Falha na autenticação');
        yield put(signInFailure());
    }
}

export default all([takeLatest('@auth/SIGN_IN_REQUEST', signIn)]);
