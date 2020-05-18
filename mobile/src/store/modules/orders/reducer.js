import produce from 'immer';

const INITIAL_STATE = {
    loading: false,
    status: 'progress',
    deliveries: [],
};

export default function orders(state = INITIAL_STATE, action) {
    return produce(state, (draft) => {
        switch (action.type) {
            case '@orders/REQUEST': {
                draft.loading = true;
                draft.status = action.payload.status;
                break;
            }
            case '@orders/SUCCESS': {
                draft.loading = false;
                draft.deliveries = action.payload.data;
                break;
            }
            case '@orders/FAILURE': {
                draft.loading = false;
                break;
            }
            default:
        }
    });
}
