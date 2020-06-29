import { Alert } from 'react-native';
import { all, call, put, takeLatest } from 'redux-saga/effects';

import api from '~/services/api';

import { Success, Failure } from './actions';

export function* loadOrders({ payload }) {
    try {
        const { id, status, page, oldOrders } = payload;

        const { data } = yield call(
            api.get,
            `/deliveryman/${id}/deliveries/${status}?page=${page}`
        );

        const result = [...oldOrders, ...data.orders];

        yield put(Success(result));
    } catch (err) {
        Alert.alert('Falha na autenticação');
        yield put(Failure());
    }
}

export default all([takeLatest('@orders/REQUEST', loadOrders)]);
