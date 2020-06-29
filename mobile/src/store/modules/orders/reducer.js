import produce from 'immer';

const INITIAL_STATE = {
    loading: false,
    status: 'all',
    deliveries: [],
    page: 1,
};

export default function orders(state = INITIAL_STATE, action) {
    return produce(state, (draft) => {
        switch (action.type) {
            case '@orders/REQUEST': {
                draft.loading = true;
                draft.status = action.payload.status;
                draft.page = action.payload.page;
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
