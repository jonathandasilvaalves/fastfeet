import { Alert } from 'react-native';
import { all, call, put, takeLatest } from 'redux-saga/effects';

import api from '~/services/api';

import { Success, Failure } from './actions';

export function* loadOrders({ payload }) {
    try {
        const { id, status } = payload;

        const { data } = yield call(
            api.get,
            `/deliveryman/${id}/deliveries/${status}`
        );

        yield put(Success(data.orders));
    } catch (err) {
        Alert.alert('Falha na autenticação');
        yield put(Failure());
    }
}

export default all([takeLatest('@orders/REQUEST', loadOrders)]);
