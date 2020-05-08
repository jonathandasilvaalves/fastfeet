import { combineReducers } from 'redux';

import auth from './auth/reducer';
import user from './user/reducer';
import orders from './orders/reducer';

export default combineReducers({
    auth,
    user,
    orders,
});
